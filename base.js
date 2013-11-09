window.onload = function() {  
  var inputBox  = document.getElementById("input_text")
  inputBox.addEventListener("input", keyDownTextField, false)
  window.addEventListener("keydown", upUpDownDown)

  // window.addEventListener("keydown", startTimer)
  cheatCodeChecker = []
  wrongCharacter = 0 
  // global variable? Is there a better way to do this?
  runGame()
  // mediator? Better way to do?
}


function runGame() {
  var selectors = createSelectors()
  setGoalSentence(selectors.goalText, selectors.displayText)
}

function createSelectors() {
  var elements = {
    // outputText:  document.getElementById("output_text"),
    goalText:    document.getElementById("goal_text"),
    displayText: document.getElementById("display_text") 
  }
  return elements
}

function results(accuracy, wpm) {
  createSelectors().displayText.innerHTML = "wpm: " + wpm + "<br> accuracy: " + accuracy + "%"
}

function setGoalSentence(goalText, displayText) {
  console.log(goalText)
  goalGlobal = "We're going to have to think outside the box here... I just pooped in it."
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

var started = false

function keyDownTextField(e) {
  if (started === false){
    startTime = new Date().getTime();
    started = true
  }
  checkCorrect(e.srcElement.value);
}

function computeTime(startTime) {
  var endTime = new Date().getTime();
  console.log((endTime - startTime) / 1000);
  var finishTime = ((endTime - startTime) / 1000);
  results(findAccuracy(), calcWPM(goalGlobal, finishTime))
}

function calcWPM(userString, time) {
  var timeInMinutes = time / 60
    var splitString = userString.split(" ");
    var WPM = Math.round((splitString.length / timeInMinutes));
    console.log("Words per minute = " + WPM);
    return WPM;
  }

  function findAccuracy() {
    var wrongChars = cheatCodeChecker.length - goalGlobal.length
    var accuracy = Math.floor((1 - wrongChars / goalGlobal.length) * 100)
    return accuracy
  }

  function checkCorrect(newText) {
    var location = newText.length - 1
    if ( newText[location] === goalGlobal[location] ) {
      highlightLetter(location)
      if ( location === goalGlobal.length -1 ) {
        console.log("finished sentence")
        computeTime(startTime)
      }
    }
  }



  function highlightLetter(location) {
    $('#display_text').find('span:nth(' + location + ')').css('color', '#d35400');
  }

  function upUpDownDown(e) {
    if (e.keyCode !== 8) { 
      var cheatCode = '38,38,40,40,37,39,37,39'
      cheatCodeChecker.push(e.keyCode)
      if (cheatCodeChecker.join() === cheatCode ) {
        console.log('cheat enabled')
        $('body').css('background', 'url(http://www.sluconnection.com/wp-content/uploads/2011/10/squirrel.jpg)')
      }
    }
  }

// function startTimer(e) {
//   var firstLetterCorrect = '38'
//   startTimerArray.push(e.keyCode)
//   // console.log(cheatCodeChecker)
//   if (startTimerArray.join() === firstLetterCorrect ) {
//     // console.log('timer started')
//     startTime = new Date().getTime();
//     // console.log(startTime)
//   }
// }









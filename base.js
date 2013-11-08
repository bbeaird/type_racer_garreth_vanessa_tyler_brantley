// wow! this is soooo clean.  totally readable.  nicely done.  
// Consider maybe using Jquery instead of getElementById()
window.onload = function() {  
  var inputBox  = document.getElementById("yourinput")
  inputBox.addEventListener("input", keyDownTextField, false)
  window.addEventListener("keydown", upUpDownDown)
  cheatCode = []
  runGame()
}

// i like how this is right at the top.  now i know where to start!
function runGame() {
  var selectors = createSelectors()
  setGoalSentence(selectors.goalText, selectors.displayText)
}

function createSelectors() {
  var selectors = {
    // inputBox:    document.getElementById("yourinput"),
    outputText:  document.getElementById("output"),
    goalText:    document.getElementById("goal_sentence"),
    displayText: document.getElementById("display_sentence") 
  }
  return selectors
}

// would be sweet if this was configurable somehow, or came in from a url
function setGoalSentence(goalText, displayText) {
  goalGlobal = 'you sentence t sentence you should type'
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

function keyDownTextField(e) {
  // console.log('input (3): also bubblin here')
  if(e.keyCode != 13) {
    notStarted = false;
    startTime = new Date().getTime();
  } else { computeTime(startTime); }
  // console.log(e.srcElement.value)
  updateText(e.srcElement.value);
  checkCorrect(e.srcElement.value);
}

function computeTime(startTime) {
  var endTime = new Date().getTime();
  console.log((endTime - startTime) / 1000);
  return ((endTime - startTime) / 1000);
}





function updateText(newText) {
  var selectors = createSelectors()
  selectors.outputText.innerHTML = newText;
}

function checkCorrect(newText) {
  // console.log("input: ", newText)

  // var selectors = createSelectors()
  // var input = selectors.inputBox.value
  // var userInput = e.keyCode
  // var goal = selectors.goalText.innerHTML
  // var goal = goalGlobal.keyCode

  // console.log(goalGlobal.keyCode + 'booo')
  var location = newText.length - 1
  // console.log('goal text ', goalGlobal.charCodeAt(location))
  
  if ( newText[location] === goalGlobal[location] ) {
    console.log('letter match')
    highlightLetter(location)
  }
}
// this is really sexy.
// wait, just looked at your html and it looks really busy. can it be done without all the spans?
// also only allows letter-by-letter colorization.  other modes would be cool.
function highlightLetter(location) {
  $('#display_sentence').find('span:nth(' + location + ')').css('background-color', 'red');
}

// cheat codes! bazinga.
function upUpDownDown(e) {
  // console.log(e.keyCode)
  cheatCode.push(e.keyCode)
  console.log(cheatCode)

  if (cheatCode.join() === '38,38,40,40,37,39,37,39' ) {
    console.log('cheat enabled')
  }
}


// overall this is just so clean and easy to read. thank you!







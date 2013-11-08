window.onload = function() {  
  var inputBox  = document.getElementById("yourinput")
  inputBox.addEventListener("input", keyDownTextField, false)
  window.addEventListener("keydown", upUpDownDown)
  cheatCode = []
  runGame()
}

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

function setGoalSentence(goalText, displayText) {
  goalGlobal = 'you sentence you should type'
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

// var notStarted = true

function keyDownTextField(e) {
  // console.log('input (3): also bubblin here')
  if(e.keyCode != 13) {
    notStarted = false;
    startTime = new Date().getTime();
  } else { computeTime(startTime); }
  // console.log(e.srcElement.value)
  updateText(e.srcElement.value);
  checkCorrect(e.srcElement.value);
  // console.log(e)
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

function highlightLetter(location) {
  $('#display_sentence').find('span:nth(' + location + ')').css('background-color', 'red');
}

function upUpDownDown(e) {
  // console.log(e.keyCode)
  cheatCode.push(e.keyCode)
  console.log(cheatCode)

  if (cheatCode.join() === '38,38,40,40,37,39,37,39' ) {
    console.log('cheat enabled')
  }
}









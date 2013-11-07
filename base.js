window.onload = function() {
  var inputBox  = document.getElementById("yourinput")
  inputBox.addEventListener("keypress", keyDownTextField, false)
  runGame()
}

function runGame() {
  var selectors = createSelectors()
  setGoalSentence(selectors.goalText, selectors.displayText)
}

function createSelectors() {
  var selectors = {
    inputBox:    document.getElementById("yourinput"),
    outputText:  document.getElementById("output"),
    goalText:    document.getElementById("goal_sentence"),
    displayText: document.getElementById("display_sentence") 
  }
  return selectors
}

function setGoalSentence(goalText, displayText) {
  goalGlobal = 'you sentence t sentence you should type'
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

function keyDownTextField(e) {
  if(e.keyCode != 13) {
    notStarted = false;
    startTime = new Date().getTime();
  } else { computeTime(startTime); }
  // console.log(e.keyCode)
  updateText();
  checkCorrect(e);
}

function computeTime(startTime) {
  var endTime = new Date().getTime();
  console.log((endTime - startTime) / 1000);
  return ((endTime - startTime) / 1000);
}





function updateText() {
  var selectors = createSelectors()
  var input = selectors.inputBox.value;
  selectors.outputText.innerHTML = input;
}

function checkCorrect(e) {
  console.log("input: ", e.keyCode)

  var selectors = createSelectors()
  var input = selectors.inputBox.value
  var userInput = e.keyCode
  // var goal = selectors.goalText.innerHTML
  // var goal = goalGlobal.keyCode

  // console.log(goalGlobal.keyCode + 'booo')
  var location = input.length 
    console.log('goal text ', goalGlobal.charCodeAt(location))
  
    if ( userInput === goalGlobal.charCodeAt(location) ) {
    console.log('letter match')
    highlightLetter(location)
  }
}

function highlightLetter(location) {
  $('#display_sentence').find('span:nth(' + location + ')').css('background-color', 'red');
}



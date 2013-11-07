window.onload = function() {
  var inputBox  = document.getElementById("yourinput")
  inputBox.addEventListener("keyup", keyDownTextField, false)
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
  var goal = 'this is the first sentence you should type'
  goalText.innerHTML = goal
  goal = goal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

function keyDownTextField(e) {
  if(e.keyCode != 13) {
    notStarted = false;
    startTime = new Date().getTime();
  } else { computeTime(startTime); }
  updateText();
  checkCorrect();
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

function checkCorrect() {
  var selectors = createSelectors()
  var input = selectors.inputBox.value
  var goal = selectors.goalText.innerHTML
  var location = input.length - 1
  if (input[location] === goal[location]) {
    console.log('letter match')
    highlightLetter(location)
  }
}

function highlightLetter(location) {
  $('#display_sentence').find('span:nth(' + location + ')').css('background-color', 'red');
}



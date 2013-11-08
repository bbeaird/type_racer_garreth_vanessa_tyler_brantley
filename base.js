window.onload = function() {  
  var inputBox  = document.getElementById("input_text")
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
    outputText:  document.getElementById("output_text"),
    goalText:    document.getElementById("goal_text"),
    displayText: document.getElementById("display_text") 
  }
  return selectors
}

function setGoalSentence(goalText, displayText) {
  console.log(goalText)
  goalGlobal = 'you sentence you should type'
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}

// var notStarted = true

function keyDownTextField(e) {
  if(e.keyCode != 13) {
    notStarted = false;
    startTime = new Date().getTime();
  } else { computeTime(startTime); }
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
  var location = newText.length - 1
  if ( newText[location] === goalGlobal[location] ) {
    console.log('letter match')
    highlightLetter(location)
  }
}

function highlightLetter(location) {
  $('#display_text').find('span:nth(' + location + ')').css('color', '#d35400');
}

function upUpDownDown(e) {
  cheatCode.push(e.keyCode)
  console.log(cheatCode)
  if (cheatCode.join() === '38,38,40,40,37,39,37,39' ) {
    console.log('cheat enabled')
  }
}









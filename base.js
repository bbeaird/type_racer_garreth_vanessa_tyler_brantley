window.onload = function() {  
  var inputBox  = document.getElementById("input_text")
  inputBox.addEventListener("input", keyDownTextField, false)
  window.addEventListener("keydown", upUpDownDown)
  cheatCodeChecker = []
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
    outputText:  document.getElementById("output_text"),
    goalText:    document.getElementById("goal_text"),
    displayText: document.getElementById("display_text") 
  }
  return elements
}

function setGoalSentence(goalText, displayText) {
  console.log(goalText)
  goalGlobal = "We're going to have to think outside the box here... I just pooped in it."
  goalText.innerHTML = goalGlobal
  goal = goalGlobal.split('')
  goal = "<span>" + goal.join('</span><span>') + "</span>"
  displayText.innerHTML = goal
}


function keyDownTextField(e) {
  if(e.keyCode !== '13') {
    notStarted = false;
    startTime = new Date().getTime();
    console.log("Inside when non-enter key is hit")
    console.log(e.keyCode)
  } 
  if (e.keyCode === '13') {
    console.log("When enter key is hit")
    computeTime(startTime); 
  }
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
  var cheatCode = '38,38,40,40,37,39,37,39'
  cheatCodeChecker.push(e.keyCode)
  // console.log(cheatCodeChecker)
  if (cheatCodeChecker.join() === cheatCode ) {
    console.log('cheat enabled')
  }
}









window.onload = function() {


  var notStarted = true;

  var inputBox  = document.getElementById("yourinput")
  var outputText = document.getElementById("output")
  var goalText = document.getElementById("goal_sentence")
  var displayText = document.getElementById("display_sentence")


  inputBox.addEventListener("keyup", keyDownTextField, false);
  setGoalSentence();


  function setGoalSentence() {
    var goal = 'this is the first sentence you should type'
    goalText.innerHTML = goal
    goal = goal.split('')
    goal = "<span>" + goal.join('</span><span>') + "</span>"
    displayText.innerHTML = goal
  }


  function keyDownTextField(e) {
    if(e.keyCode == 13) {
      computeTime(typingStarted);
    } else if (notStarted) {
      notStarted = false;
      typingStarted = new Date().getTime();
    }
    updateText();
    checkCorrect();
  }

  function computeTime(startTime) {
    var endTime = new Date().getTime();
    console.log((endTime - startTime) / 1000);
    // return ((endTime - startTime) / 1000);
  }


  function updateText() {
    var input = inputBox.value;
    outputText.innerHTML = input;
  }

  function checkCorrect() {
    var input = inputBox.value
    var goal = goalText.innerHTML
    var location = input.length - 1
    if (input[location] === goal[location]) {
      console.log('good')
      highlightLetter(location)
    }
  }

  function highlightLetter(location) {
    $('#display_sentence').find('span:nth(' + location + ')').css('background-color', 'red');
  }
}
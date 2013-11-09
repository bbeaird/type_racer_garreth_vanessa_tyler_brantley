window.onload = function() {  
  document.getElementById("input_text").addEventListener("input", keyDownTextField, false)
  window.addEventListener("keydown", upUpDownDown)
  
  var gameVars = {
    displayLocation: document.getElementById("display_text"),
    goalGlobal: "We're going to have to think outside the box here... I just pooped in it.",
    cheatCodeChecker: [],
    started: false,
    kittyAttack: true
  }

  function setGoalSentence() {
    goal = gameVars.goalGlobal.split('')
    goal = "<span>" + goal.join('</span><span>') + "</span>"
    gameVars.displayLocation.innerHTML = goal
  }
  
  function results(accuracy, wpm) {
    gameVars.displayLocation.innerHTML = "wpm: " + wpm + "<br> accuracy: " + accuracy + "%"
  }

  function keyDownTextField(e) {
    if (gameVars.started === false){
      startTime = new Date().getTime();
      gameVars.started = true
    }
    checkCorrect(e.srcElement.value);
  }

  function computeTime(startTime) {
    var endTime = new Date().getTime();
    var finishTime = ((endTime - startTime) / 1000);
    results(findAccuracy(), calcWPM(gameVars.goalGlobal, finishTime))
  }

  function calcWPM(userString, time) {
    var timeInMinutes = time / 60
    var splitString = userString.split(" ");
    var WPM = Math.round((splitString.length / timeInMinutes));
    return WPM;
  }

  function findAccuracy() {
    var wrongChars = gameVars.cheatCodeChecker.length - gameVars.goalGlobal.length
    var accuracy = Math.floor((1 - wrongChars / gameVars.goalGlobal.length) * 100)
    return accuracy
  }

  function checkCorrect(newText) {
    var location = newText.length - 1
    if ( newText[location] === gameVars.goalGlobal[location] ) {
      highlightLetter(location)
      if ( location === gameVars.goalGlobal.length -1 ) {
        computeTime(startTime)
      }
    }
  }

  function highlightLetter(location) {
    var colorPrior = $('#display_text').find('span:nth(' + (location - 1) + ')').css('color')
    if ((colorPrior === 'rgb(211, 84, 0)') || location == 0) {
      $('#display_text').find('span:nth(' + location + ')').css('color', 'rgb(211, 84, 0)');
    }
  }

  function upUpDownDown(e) {
    if (e.keyCode !== 8) { 
      var cheatCode = '38,38,40,40,37,39,37,39'
      gameVars.cheatCodeChecker.push(e.keyCode)
      if (gameVars.cheatCodeChecker.join() === cheatCode ) {
        console.log('cheat enabled')
        gameVars.kittyAttack = false
      }
    }
  }

  setTimeout( delayTime, Math.floor(Math.random()*10000)+5000);

  function makeLetters(){
    randNum = Math.floor(Math.random()*43)+48;
    var catLetters = String.fromCharCode(randNum);
    document.getElementById("input_text").value += catLetters
    console.log(catLetters);
  }

  var letterCounter = 0;

  function delayTime() {
    if(gameVars.kittyAttack){
      var timeDelay = Math.floor(Math.random()*60)+40;
      var lettersLength = Math.floor(Math.random()*13)+7;
      setTimeout(function(){ 
        $('#cat').animate({ 
          right: '2000px',
        },
        1500);
        makeLetters();
        letterCounter++;
        if (letterCounter < lettersLength) {
          delayTime();
        }
      }, timeDelay)
    }
  }

  setGoalSentence()
}


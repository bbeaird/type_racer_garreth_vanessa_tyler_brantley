TIME = [30000, 5000] // max, min
MAX_TIMES = Math.floor(Math.random()*2)+1

setTimeout( delayTime, Math.floor(Math.random()*TIME[0])+TIME[1] );

function makeLetters(){
  randNum = Math.floor(Math.random()*43)+48;
  var catLetters = String.fromCharCode(randNum);
  document.getElementById("input_text").value += catLetters
  console.log(catLetters);
}

var letterCounter = 0;

function delayTime() {
  var timeDelay = Math.floor(Math.random()*55)+66;
  var lettersLength = Math.floor(Math.random()*13)+7;
  setTimeout(function(){ 
    makeLetters();
    letterCounter++;
    if (letterCounter < lettersLength) {
      delayTime();
    }
  }, timeDelay)
}


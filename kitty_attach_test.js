setTimeout( delayTime, 2000);

function makeLetters(){
  randNum = Math.floor(Math.random()*43)+48;
  var catLetters = String.fromCharCode(randNum);
  document.getElementById("input_text").value += catLetters
  console.log(catLetters);
}

var letterCounter = 0;

function delayTime() {
  var timeDelay = 50
  var lettersLength = 15;
  setTimeout(function(){ 
    makeLetters();
    letterCounter++;
    if (letterCounter < lettersLength) {
      delayTime();
      // $(function(){
        // $('#cat').animate( { left: 500px } )
      // })
    }
  }, timeDelay)
}


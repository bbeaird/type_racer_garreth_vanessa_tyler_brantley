window.onload = function() {
  var inputElement = document.getElementById("yourinput");
  inputElement.addEventListener("keydown", keyDownTextField, false);

  var notStarted = true;

  function keyDownTextField(e) {
    if(e.keyCode == 13) {
      computeTime(typingStarted);
      calcWPM();
    } else if (notStarted) {
      notStarted = false;
      typingStarted = new Date().getTime();
    }
  }

  function computeTime(startTime) {
    var endTime = new Date().getTime();
    console.log((endTime - startTime) / 1000);
    // return ((endTime - startTime) / 1000);
  }
}


  function calcWPM(userString, time) {
    var timeInMinutes = .5
    var userString = document.getElementById("yourinput").value;
    var splitString = userString.split(" ");
    var WPM = Math.round((splitString.length / timeInMinutes));
    console.log("Words per minute = " + WPM);
    return WPM;
  }
  // this is totally cool but why a separate file for this?
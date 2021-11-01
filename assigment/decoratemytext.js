
var timer = null;

function buttonclick(){

    if (timer == null) {
        timer = setInterval(biggerFont, 1000);
      } else {
        clearInterval(timer);
        timer = null;
      }
    var clickMe = document.getElementById("text1");
    clickMe.style.fontSize = "24pt";

}
function onchecked(){
    var clickMe = document.getElementById("text1");
    clickMe.style.color="green";
    clickMe.style.textDecoration="underline";
 
}

function highlightField() {
    // turn text yellow and make it bigger
    if (!document.getElementById("text1").className) {
      document.getElementById("text1").className = "highlight";
    } else if (document.getElementById("text1").className.indexOf("invalid") < 0) {
      document.getElementById("text1").className += " highlight";
    }
  }
 
  function biggerFont() {
    var size = parseInt(document.getElementById("text1").style.fontSize);
    size += 2;
    document.getElementById("text1").style.fontSize = size + "pt";
  }
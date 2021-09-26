console.log("The program is running"); //Prints in the console to check if program is running in the first place

var elem = document.getElementById("myvideo"); //lets js know that the element to be affected is the video
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */ //for different browsers
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

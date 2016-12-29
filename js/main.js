var nextTeam = document.getElementById('next-team');

function allFilled() {
  var filled = true;
  // getting all input fields
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      return false;
    }
  }
  return filled;
}

nextTeam.addEventListener("click", function() {
  document.getElementById("app-main").style = "display: none;";
  document.getElementById("app-teams").style = "display: block;";
});
// nextTeam.style = "display: block;"

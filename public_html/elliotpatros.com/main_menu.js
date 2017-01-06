function nav_dropMenu() {
  var x = document.getElementById("nav_main");
  if (x.className === "topnav") {
      x.className += " open";
  } else {
      x.className = "topnav";
  }
}
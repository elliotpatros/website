function page_openMenu(menu) {
	menu.className += " open";
	document.getElementById("top").style.paddingTop = "7.125em";
}

function page_closeMenu(menu) {
	menu.className = "topnav";
	document.getElementById("top").style.paddingTop = "2.25em";
}

function nav_dropMenu() {
	var x = document.getElementById("nav_main");
	
  if (x.className === "topnav") {
		page_openMenu(x);
  } else {
		page_closeMenu(x);
  }
}

function nav_autoClose() {
	var x = document.getElementById("nav_main");
	if ((window.innerWidth > 600) && (x.className !== "topnav")) {
		page_closeMenu(x);
	}
}

window.onresize = nav_autoClose;

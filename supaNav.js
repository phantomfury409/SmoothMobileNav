/********************************************
 * Toggles the menu by adding or removing
 * relative class
 ********************************************/
function toggleMenu() {
	var pageI = document.getElementById("page");

	if (pageI.classList.contains("menu-open"))
	{
		// Menu is open close it
		pageI.classList.remove("menu-open");
		pageI.classList.add("menu-close");

		enableBodyScroll();
	} else {
		// Menu is closed open it		
		pageI.classList.remove("menu-close");
		pageI.classList.add("menu-open");

		disableBodyScroll();
	}

	pageI.addEventListener("webkitTransitionEnd", resetAnimations, false);
	pageI.addEventListener("msTransitionEnd", resetAnimations, false);
	pageI.addEventListener("oTransitionEnd", resetAnimations, false);
	pageI.addEventListener("transitionEnd", resetAnimations, false);
}

/********************************************
 * Resets animations after close
 * animation is finished
 * Note: Fixes horizontal scrolling after
 * 		 close animation
 ********************************************/
function resetAnimations() {
	// Reset animations
	if (document.getElementById("page").classList.contains("menu-close"))
		document.getElementById("page").classList.remove("menu-close");	
}

/********************************************
 * Disables scrolling when menu is open
 ********************************************/
function disableBodyScroll() {
	document.body.style.overflow = "hidden";
	document.getElementById("page").style.overflow = "hidden";
}

/********************************************
 * Enables scrolling when menu is closed
 ********************************************/
function enableBodyScroll() {
	document.body.style.overflow = "";
	document.getElementById("page").style.overflow = "";
}
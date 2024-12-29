"use strict";

const backToTop = document.querySelector(".back-to-top");

backToTop.onclick = function () {
	window.scrollTo({
		top: 10,
		behavior: "smooth",
	});
};

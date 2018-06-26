document.addEventListener("DOMContentLoaded", function () {

	var infoLeft = document.querySelector(".info-left");
	var infoCenter = document.querySelector(".info-center");
	var infoLeftBanner = document.querySelector(".info-left-banner");
	var linkCenterBanner = document.querySelector(".info-center-banner");
	infoLeft.addEventListener("mouseover", function (event) {
		infoLeftBanner.style.display = "none";
	});
	infoLeft.addEventListener("mouseout", function (event) {
		infoLeftBanner.style.display = "block";
	})
	infoCenter.addEventListener("mouseover", function (event) {
		linkCenterBanner.style.display = "none";
	});
	infoCenter.addEventListener("mouseout", function (event) {
		linkCenterBanner.style.display = "block";
	})
	var next = document.querySelector(".banner-next");
	var prev = document.querySelector(".banner-prev");
	var slides = document.querySelectorAll(".banner-slide");
	var index = 0;

	slides[index].classList.add("banner-slide--active");

	prev.addEventListener("click", function () {
		slides[index].classList.remove("banner-slide--active");
		index--;
		if (index < 0) {
			index = slides.length - 1;
		}
		slides[index].classList.add("banner-slide--active");
	});
	next.addEventListener("click", function () {
		slides[index].classList.remove("banner-slide--active");
		index++;
		if (index >= slides.length) {
			index = 0
		}
		slides[index].classList.add("banner-slide--active");
	});
});
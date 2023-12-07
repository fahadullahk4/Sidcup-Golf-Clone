var mouseCursor = document.querySelector(".cursor");
var mouseCursorBackground = document.querySelector(".cursor-background");
document.addEventListener("mousemove", function (dets) {
	mouseCursor.style.left = dets.x + 30 + "px";
	mouseCursor.style.top = dets.y + "px";
	mouseCursorBackground.style.left = dets.x - 200 + "px";
	mouseCursorBackground.style.top = dets.y - 200 + "px";
});

var whiteCursor = document.querySelectorAll(
	".nav-bar img, .nav-bar h4, .cards, .page4-content, .footer-content-1 i, .footer-content-1 img, .footer-content, .footer p "
);
whiteCursor.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		mouseCursor.style.scale = 3;
		mouseCursor.style.border = "0.2px solid #fff";
		mouseCursor.style.backgroundColor = "transparent";
	});
});
whiteCursor.forEach(function (elem) {
	elem.addEventListener("mouseleave", function () {
		mouseCursor.style.scale = 1;
		mouseCursor.style.border = "0px solid #95C11E";
		mouseCursor.style.backgroundColor = "#95C11E";
	});
});

gsap.to(".nav-bar", {
	backgroundColor: "#000",
	duration: 0.5,
	height: "90px",
	scrollTrigger: {
		trigger: ".nav-bar",
		scroller: "body",
		start: "top -10%",
		end: "top -11%",
		scrub: 1,
	},
});

gsap.to(".main", {
	backgroundColor: "#000",
	scrollTrigger: {
		trigger: ".main",
		scroller: "body",
		start: "top -20%",
		end: "top -75%",
		scrub: 2,
	},
});

gsap.from(".about-us img, .about-us-text", {
	y: 50,
	opacity: 0,
	duration: 1,
	stagger: 0.4,
	scrollTrigger: {
		trigger: ".about-us",
		scroller: "body",
		start: "top 60%",
		end: "top 58%",
		scrub: 2,
	},
});

gsap.from(".cards", {
	scale: 0.8,
	opacity: 0,
	duration: 1,
	stagger: 0.4,
	scrollTrigger: {
		trigger: ".cards",
		scroller: "body",
		start: "top 70%",
		end: "top 65%",
		scrub: 1,
	},
});

gsap.from(".colon-img-1", {
	y: -70,
	x: -70,
	scrollTrigger: {
		trigger: ".colon-img-1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub: 4,
	},
});

gsap.from(".colon-img-2", {
	y: 70,
	x: 70,
	scrollTrigger: {
		trigger: ".colon-img-1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub: 4,
	},
});

gsap.from(".page4 h1", {
	y: 50,
	scrollTrigger: {
		trigger: ".page4 h1",
		scroller: "body",
		start: "top 75%",
		end: "top 70%",
		scrub: 2,
	},
});

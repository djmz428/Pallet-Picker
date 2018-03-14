var	swatches = document.querySelectorAll(".swatch");
var	palettes = document.querySelectorAll(".palette");
var	details = document.querySelectorAll(".detail");
var	dots = document.querySelectorAll(".colsPicked");
var resPal = document.querySelector("#resPallet");
var newCol = document.querySelector("#newCol");
var colList = [];

for(var a = 0; a < swatches.length; a++) {
	palettes[a].addEventListener("click", function() {
		for(var j = 0; j < dots.length; j++) {
			if(dots[j].style.backgroundColor === "") {
				dots[j].style.backgroundColor = this.style.backgroundColor;
				break;
			}
		}
	});
}

for(var b = 0; b < dots.length; b++) {
	dots[b].addEventListener("click", function() {
		this.style.backgroundColor = "";
	});
}

newCol.addEventListener("click", function() {
	setColors();
});

resPal.addEventListener("click", function() {
	for(var c = 0; c < dots.length; c++) {
		dots[c].style.backgroundColor = "";
	}
});

function randColor() {
	return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

function setColors () {
	for(var i = 0; i < swatches.length; i++) {
		var selColor = randColor();
		palettes[i].style.backgroundColor = selColor;
		details[i].textContent = selColor;
	}
}

setColors();
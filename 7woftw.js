let n = 1;
let darkModeOn = False;

function myFunction() {
	n += 1;
	document.getElementById("textBox").innerHTML = n;
}

function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("darkMode");

}




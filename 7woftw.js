let n = 1;
let darkModeOn = 1;

function myFunction() {
	n += 1;
	document.getElementById("textBox").innerHTML = n;
}

function toggleDarkMode(color) {
	var element = document.body;
	element.classList.toggle("darkMode");
	
	darkModeOn *= -1;
	
	if(darkMode == 1){
		document.getElementById("text1").style.color = "#BB86FC";
		document.getElementById("text2").style.color = "#BB86FC";
	}
	else{
		document.getElementById("text1").style.color = "#BB4234";
		document.getElementById("text2").style.color = "#BB4256";
	}
	
	
}




const setup = () => {
	let colorDemo = document.getElementsByClassName("colorDemo")[0]; // Neem de eerste kleurdemo omdat er maar één is
	let sliders = document.querySelectorAll(".slider"); // Alle sliders selecteren

	
	sliders.forEach(slider => {
		slider.addEventListener("input", update); // Verandering in sliderwaarde
		slider.addEventListener("change", update); // Sliderwaarde gewijzigd
	});
}

const update = () => {
	let sliders = document.querySelectorAll(".slider"); 
	let red = sliders[0].value;
	let green = sliders[1].value; 
	let blue = sliders[2].value;

	// Achtergrondkleur van de kleurdemo instellen met de RGB-waarden
	let color = `rgb(${red}, ${green}, ${blue})`;
	document.querySelector(".colorDemo").style.backgroundColor = color;

	
	document.getElementById("getal").textContent = red;
	document.getElementById("getal1").textContent = green;
	document.getElementById("getal2").textContent = blue;
}


window.addEventListener("DOMContentLoaded", setup);

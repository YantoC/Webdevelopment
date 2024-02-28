const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo")
	let numbers = document.getElementsByClassName("numbers")

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);

	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);

	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	colorDemos[0].style.backgroundColor= "rgb("+ 128 + "," + 255 + "," + 128 + ") ";
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let value0 = sliders[0].value;
	let value1 = sliders[1].value;
	let value2 = sliders[2].value;

	let colorDemos=document.getElementsByClassName("colorDemo")
	let numbers = document.getElementsByClassName("numbers")

	colorDemos[0].style.backgroundColor= "rgb("+ value0 + "," + value1 + "," + value2 + ") ";

	numbers[0].textContent = value0
	numbers[1].textContent  = value1
	numbers[2].textContent  = value2


	console.log("de waarde van de slider is momenteel : " + value0 + "," + value1 + "," + value2);
}
// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
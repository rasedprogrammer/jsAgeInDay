function ageInDay() {
	var birthYear = prompt("What year you were born....My good friend");
	var ageInDays = (2022 - birthYear) * 365;
	var h1 = document.createElement("h1");
	var textAnswer = document.createTextNode(`You are ${ageInDays} days`);
	h1.setAttribute("id", "ageInDay");
	h1.appendChild(textAnswer);
	document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
	document.getElementById("ageInDay").remove();
}

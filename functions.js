function active_status_change(e, data){
	var actived = document.getElementsByClassName("active");
	actived[0].className = "";
	data.parentElement.className = "active";
	document.getElementById("myNavbar").setAttribute("aria-expanded","false");
	document.getElementById("myNavbar").className= "navbar-collapse collapse";

}

function return_experience(){
	var currentDate = new Date();

	var givenDate = new Date('2017-12-15'); // Date format in yyyy-mm-dd

	var timeDiff = Math.abs(currentDate.getTime() - givenDate.getTime());

	var diffYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
	var diffMonths = Math.floor((timeDiff % (1000 * 3600 * 24 * 365.25)) / (1000 * 3600 * 24 * 30.436875)); // Average days per month: 365.25/12 = 30.436875

	var dateString = diffYears + " Years " + diffMonths + " Months";
	document.getElementById("yearsExp").textContent = dateString;
}

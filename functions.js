function active_status_change(e, data){
	var actived = document.getElementsByClassName("active");
	actived[0].className = "";
	data.parentElement.className = "active";
	document.getElementById("myNavbar").setAttribute("aria-expanded","false");
	document.getElementById("myNavbar").className= "navbar-collapse collapse";

}

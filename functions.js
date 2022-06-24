function active_status_change(e, data){
	var actived = document.getElementsByClassName("active");
	actived[0].className = "";
	data.parentElement.className = "active";
}
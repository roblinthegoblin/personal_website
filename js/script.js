function showAlert() {
   alert("ssxsxsx");
}

function sendInquiry() {
	
	person_name = document.getElementById('inquiry_name').value;
	person_email = document.getElementById('inquiry_email').value;
	message = document.getElementById('inquiry_text').value;
	
	str_out = "name: ".concat(person_name, " ", "email: ", person_email, " ", "message: ", message)
	//str_out = "name: "
	
	alert(str_out);
}
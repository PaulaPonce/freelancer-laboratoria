//Validación formulario
var sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", validateForm);

 function validateForm(){

		var name = document.getElementById('name').value;
		var valName = document.getElementsByClassName('input-form-group')[0];
		var email = document.getElementById('email').value;
		var valEmail = document.getElementsByClassName('input-form-group')[1];
		var phone = document.getElementById('phone').value;
		var valPhone = document.getElementsByClassName('input-form-group')[2];
		var message = document.getElementById('message').value;
		var valMessage = document.getElementsByClassName('input-form-group')[3];

		if(name == ""){
			var nameSpan = document.createElement('span');
			var nameText = document.createTextNode("Please enter your name");
			nameSpan.appendChild(nameText);
			valName.appendChild(nameSpan);
		}
	
		if(email == ""){
			var emailSpan = document.createElement('span');
			var emailText = document.createTextNode("Please enter your email adress");
			emailSpan.appendChild(emailText);
			valEmail.appendChild(emailSpan);
		}
		
		if(phone == ""){
			var phoneSpan = document.createElement('span');
			var phoneText = document.createTextNode("Please enter your phone number");
			phoneSpan.appendChild(phoneText);
			valPhone.appendChild(phoneSpan);
		}
	
		if(phone == ""){
			var messageSpan = document.createElement('span');
			var messageText = document.createTextNode("Please enter a message");
			messageSpan.appendChild(messageText);
			valMessage.appendChild(messageSpan);
		}

	clear(); 
}

function clear(){
	document.getElementById('name').value ="";
	document.getElementById('email').value = "";
	document.getElementById('phone').value = "";	
	document.getElementById('message').value = "";
}

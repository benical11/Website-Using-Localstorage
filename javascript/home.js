tempToken = localStorage.getItem("tokenAuth");
var logOutButton = document.getElementById("logOut");
logOutButton.style.visibility="hidden";







	var modal = document.getElementById('myModal');
	var img = document.getElementsByClassName('myImg');
	var modalImg = document.getElementById("img01");
		
	function showModal(){
		modal.style.display = "block";
		modalImg.src = this.src;
		 
	}
	

	
	
	for (var i = 0; i < img.length; i++) {
		img[i].addEventListener('click', showModal);
	}
	
	//Close modal 
	window.onkeyup = function (event) {
        if (event.keyCode == 27 ) {
            modal.style.display='none';
        }
    }
	
	

	
	
	
	
	if(tempToken == "true"){
			logOutButton.style.visibility="visible";
	}
	
	else if(tempToken == null || tempToken == "false"){
			logOutButton.style.visibility="hidden";
	}
			
	function logOutButtonFun(){
			event.preventDefault();
			
			logOutButton.style.visibility="hidden";
			authToken = false;
			localStorage.setItem("tokenAuth", authToken);
			alert("Cikis yapildi.");
			window.location = "login.html";
	}
	var logInButton = document.getElementById("logIn");
	 
	tempTokenLogIn = localStorage.getItem("tokenAuth");
	
	
	if(tempTokenLogIn == "true"){
		
			logInButton.style.visibility="hidden";
	}
	
	else if(tempTokenLogIn == null || tempTokenLogIn == "false"){
		
			logInButton.style.visibility="visible";
	}
	
		
	
	
	
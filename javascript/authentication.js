
	tempToken = localStorage.getItem("tokenAuth");
	var logOutButton = document.getElementById("logOut");
	
	
	if(tempToken == "true"){
		alert("Access is opened.");
			logOutButton.style.visibility="visible";
	}
	
	else if(tempToken == null || tempToken == "false"){
		alert("Access is denied. Please login.");
			window.location.href="login.html";
	}
	
	function logOutButtonFun(){
			event.preventDefault();
			
			authToken = false;
			localStorage.setItem("tokenAuth",authToken)
			alert("Logged out");
			window.location.href="home.html";
	}	
			
			
		

	
			
		
	
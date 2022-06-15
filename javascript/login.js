
		var emailArray=[];
        var passwordArray=[];
		var authToken = false;
        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");
		localStorage.setItem("tokenAuth", authToken);
		logOutButton.style.visibility="hidden";
		
        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            
			
            regTab.style.backgroundColor="#2c3e50";
            loginTab.style.backgroundColor="#2c3e50";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            

            loginTab.style.backgroundColor="#2c3e50";
            regTab.style.backgroundColor="#2c3e50";
        }
       


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");
                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
				authToken = true;
				localStorage.setItem("tokenAuth", authToken);
				window.location = "planets.html";
            }
        }
		
		
		
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        password: document.getElementById("password").value

    };

    if(user.name === "" || user.email === "" || user.password === ""){

        alert("Please fill all fields!");

        return;

    }

    try{

        const response = await fetch("http://localhost:8080/user/register",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)

        });

        if(response.ok){

            alert("Registration Successful! Please Login.");

            window.location.href = "login.html";

        }else{

            const message = await response.text();

            alert(message);

        }

    }catch(error){

        console.error(error);

        alert("Server Error!");

    }

});


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        email: email,
        password: password
    };

    try {

        const response = await fetch("http://localhost:8080/user/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)

        });

        if (response.ok) {

            const data = await response.json();

            localStorage.setItem("user", JSON.stringify(data));

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password!");

        }

    } catch (error) {

        console.error(error);

        alert("Server Error!");

    }

});
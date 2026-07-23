const user = JSON.parse(localStorage.getItem("user"));

if(!user){

    window.location.href = "login.html";

}

document.getElementById("welcome").innerHTML =
`Welcome, ${user.name} 👋`;

document.getElementById("profileName").innerHTML = user.name;

document.getElementById("logoutBtn").addEventListener("click",()=>{

    localStorage.removeItem("user");

    window.location.href="login.html";

});

// ================= ROADMAP GENERATOR =================

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", async () => {

    const goal = document.getElementById("goal").value.trim();

    if(goal === ""){

        alert("Please enter a career goal!");

        return;

    }

    try{

        const response = await fetch("http://localhost:8080/roadmap/generate",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                goal:goal
            })

        });

        const roadmap = await response.json();

        let html = "<h3>Your Roadmap</h3>";

        roadmap.forEach((step,index)=>{

            html += `

            <div class="roadmap-card">

                <div class="roadmap-info">

                    <h4>📘 ${step}</h4>

                    <div class="roadmap-meta">

                        <span class="level">🟢 Beginner</span>

                        <span class="duration">⏳ 2 Days</span>

                    </div>

                </div>

                <input
                    type="checkbox"
                    class="roadmap-check"
                    id="step${index}"
                >

            </div>

            `;

        });

        document.getElementById("roadmapResult").innerHTML = html;

        const checkboxes = document.querySelectorAll(".roadmap-check");

        checkboxes.forEach(box=>{

            box.addEventListener("change",updateProgress);

        });

        updateProgress();




    }
    catch(error){

        console.error(error);

        alert("Unable to generate roadmap!");

    }

});

function updateProgress() {

    const checkboxes = document.querySelectorAll(".roadmap-check");

    const checked = document.querySelectorAll(".roadmap-check:checked");

    const total = checkboxes.length;

    const completed = checked.length;

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("progressFill").style.width = percent + "%";

    document.getElementById("progressText").innerHTML =
        `${percent}% Completed (${completed}/${total})`;

        document.getElementById("progressPercent").innerHTML = percent + "%";

        document.getElementById("completedTopics").innerHTML = completed;

}
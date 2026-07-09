
function generateRoadmap() {

    let goal = document.getElementById("goal").value;

    fetch("http://localhost:8080/roadmap/generate", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            goal: goal,
            currentSkill: "Beginner"
        })
    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch roadmap");
        }

        return response.json();
    })

    .then(data => {

        let roadHeight =
            (data.length * 500) + 1200;

        let html = `

        <div class="journey-road">

            <svg class="road-svg"
                 viewBox="0 0 1000 ${roadHeight}">

                <path
                    id="mainRoad"

                    d="
                    M500 100
                    C800 300,800 500,500 700
                    C200 900,200 1100,500 1300
                    C800 1500,800 1700,500 1900
                    C200 2100,200 2300,500 2500
                    C800 2700,800 2900,500 3100
                    C200 3300,200 3500,500 3700
                    C800 3900,800 4100,500 4300
                    "

                    stroke="#444"
                    stroke-width="90"
                    fill="none"
                    stroke-linecap="round"
                />

                <path

                    d="
                    M500 100
                    C800 300,800 500,500 700
                    C200 900,200 1100,500 1300
                    C800 1500,800 1700,500 1900
                    C200 2100,200 2300,500 2500
                    C800 2700,800 2900,500 3100
                    C200 3300,200 3500,500 3700
                    C800 3900,800 4100,500 4300
                    "

                    stroke="white"
                    stroke-width="8"
                    fill="none"
                    stroke-dasharray="30 25"
                />

            </svg>

            <div class="car" id="car">
                🚙
            </div>

            <div class="start-banner">
                🌄 Begin Your Career Journey
            </div>

        `;

        data.forEach((step, index) => {

            let side =
                index % 2 === 0
                    ? "left"
                    : "right";

            html += `

            <div class="journey-stop ${side}">

                <div class="mountain">
                    🏔️
                </div>

                <div class="tree-row">

                    <span>🌲</span>
                    <span>🌲</span>
                    <span>🌲</span>

                </div>

                <div class="stop-card">

                    <div class="stop-header">

                        🚏 Stop ${index + 1}

                    </div>

                    <div class="stop-step">

                        ${step}

                    </div>

                    <div class="stop-status">

                        Learning Milestone

                    </div>

                    <label class="complete-box">

                        <input
                            type="checkbox"
                            onchange="updateProgress()">

                        Completed

                    </label>

                </div>

            </div>

            `;
        });

        html += `

            <div class="destination">

                <div class="flag">

                    🏁

                </div>

                <div class="destination-card">

                    <h2>

                        Destination Reached

                    </h2>

                    <p>

                        ${goal}

                    </p>

                </div>

            </div>

        </div>

        `;

        document
            .getElementById("roadmap")
            .innerHTML = html;

        updateProgress();
    })

    .catch(error => {

        console.error(error);

        document
            .getElementById("roadmap")
            .innerHTML = `

            <div class="error-box">

                ❌ Failed To Generate Roadmap

            </div>

            `;
    });
}

function updateProgress() {

    let completed =
        document.querySelectorAll(
            ".complete-box input:checked"
        ).length;

    let total =
        document.querySelectorAll(
            ".complete-box input"
        ).length;

    let car =
        document.getElementById("car");

    if (!car || total === 0) {
        return;
    }

    let progress =
        completed / total;

    let move =
        progress * 600;

    car.style.transform =
        `translateY(${move}px)`;
}

window.addEventListener(
    "scroll",
    () => {

        let car =
            document.getElementById("car");

        if (!car) return;

        let scroll =
            window.scrollY;

        car.style.rotate =
            `${Math.sin(scroll / 200) * 8}deg`;
    }
);


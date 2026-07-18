// ==========================
// Career Compass Script
// ==========================

const careerSelect = document.getElementById("career");
const generateBtn = document.getElementById("generateBtn");

const totalSteps = document.getElementById("totalSteps");
const completedSteps = document.getElementById("completedSteps");
const remainingSteps = document.getElementById("remainingSteps");

const progressText = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const levelText = document.getElementById("currentLevel");

const downloadBtn = document.getElementById("downloadBtn");
const darkBtn = document.getElementById("darkModeBtn");

// ==========================
// Career Data
// ==========================

const roadmap = {
    "Frontend Developer": 20,
    "Backend Developer": 22,
    "Full Stack Developer": 35,
    "Java Developer": 25,
    "Python Developer": 24,
    "Data Analyst": 26,
    "Data Scientist": 32,
    "Machine Learning": 36
};

let completed = 0;

// ==========================
// Generate Journey
// ==========================

generateBtn.addEventListener("click", () => {

    const career = careerSelect.value;

    const steps = roadmap[career] || 20;

    totalSteps.innerText = steps;
    completed = 0;

    completedSteps.innerText = completed;
    remainingSteps.innerText = steps;

    progressText.innerText = "0%";
    progressBar.style.width = "0%";

    levelText.innerHTML = "🌱 Beginner";

    alert(`${career} Roadmap Generated Successfully!`);
});

// ==========================
// Complete One Step
// (Call completeStep() whenever user finishes a lesson)
// ==========================

function completeStep() {

    const total = Number(totalSteps.innerText);

    if (completed >= total) return;

    completed++;

    completedSteps.innerText = completed;

    remainingSteps.innerText = total - completed;

    const percent = Math.round((completed / total) * 100);

    progressText.innerText = percent + "%";

    progressBar.style.width = percent + "%";

    // Change Level
    if (percent < 30) {
        levelText.innerHTML = "🌱 Beginner";
    }
    else if (percent < 60) {
        levelText.innerHTML = "📘 Intermediate";
    }
    else if (percent < 90) {
        levelText.innerHTML = "🚀 Advanced";
    }
    else {
        levelText.innerHTML = "🏆 Job Ready";
    }

}

// ==========================
// Download Button
// ==========================

downloadBtn.addEventListener("click", () => {

    const career = careerSelect.value;

    const data = `
Career : ${career}

Total Steps : ${totalSteps.innerText}

Completed : ${completedSteps.innerText}

Remaining : ${remainingSteps.innerText}

Progress : ${progressText.innerText}

Level : ${levelText.innerText}
`;

    const blob = new Blob([data], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `${career}-Roadmap.txt`;

    link.click();

});

// ==========================
// Dark Mode
// ==========================

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

});

// ==========================
// Smooth Animation
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "1";
    }, 100);

});

// ==========================
// Floating Hero Animation
// ==========================

const hero = document.querySelector(".hero-pin");

if(hero){

let pos = 0;
let direction = 1;

setInterval(() => {

    pos += direction;

    hero.style.transform = `translateY(${pos}px)`;

    if (pos > 12 || pos < -12)
        direction *= -1;

}, 50);

}
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
    .then(response => response.json())
    .then(data => {

        let resultHtml = "";

        data.forEach(step => {
            resultHtml += `
                <div class="card">
                    ${step}
                </div>
            `;
        });

        document.getElementById("result").innerHTML = resultHtml;
});
}
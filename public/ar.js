document.addEventListener("DOMContentLoaded", () => {

    const scene = document.querySelector("a-scene");

    scene.addEventListener("loaded", () => {
        createMiningScene();
    });

});


function createMiningScene() {

    const scene = document.querySelector("a-scene");

    // =====================================================
    // CREATE AR MARKER
    // =====================================================

    const marker = document.createElement("a-marker");
    marker.setAttribute("preset", "hiro");

    scene.appendChild(marker);


    // =====================================================
    // TUNNEL FLOOR
    // =====================================================

    const floor = document.createElement("a-box");

    floor.setAttribute("position", "0 0 0");
    floor.setAttribute("width", "6");
    floor.setAttribute("height", "0.2");
    floor.setAttribute("depth", "8");
    floor.setAttribute("color", "#3b3b3b");

    marker.appendChild(floor);


    // =====================================================
    // LEFT WALL
    // =====================================================

    const leftWall = document.createElement("a-box");

    leftWall.setAttribute("position", "-3 1.5 0");
    leftWall.setAttribute("width", "0.3");
    leftWall.setAttribute("height", "3");
    leftWall.setAttribute("depth", "8");
    leftWall.setAttribute("color", "#51483d");

    marker.appendChild(leftWall);


    // =====================================================
    // RIGHT WALL
    // =====================================================

    const rightWall = document.createElement("a-box");

    rightWall.setAttribute("position", "3 1.5 0");
    rightWall.setAttribute("width", "0.3");
    rightWall.setAttribute("height", "3");
    rightWall.setAttribute("depth", "8");
    rightWall.setAttribute("color", "#51483d");

    marker.appendChild(rightWall);


    // =====================================================
    // CEILING
    // =====================================================

    const ceiling = document.createElement("a-box");

    ceiling.setAttribute("position", "0 3 0");
    ceiling.setAttribute("width", "6");
    ceiling.setAttribute("height", "0.3");
    ceiling.setAttribute("depth", "8");
    ceiling.setAttribute("color", "#40382f");

    marker.appendChild(ceiling);


    // =====================================================
    // EXIT DOOR
    // =====================================================

    const exitDoor = document.createElement("a-box");

    exitDoor.setAttribute("position", "0 1.4 -3.7");
    exitDoor.setAttribute("width", "1.5");
    exitDoor.setAttribute("height", "2.5");
    exitDoor.setAttribute("depth", "0.2");
    exitDoor.setAttribute("color", "#263238");

    marker.appendChild(exitDoor);


    // EXIT SIGN

    const exitSign = document.createElement("a-text");

    exitSign.setAttribute("value", "EXIT");
    exitSign.setAttribute("position", "0 2.7 -3.55");
    exitSign.setAttribute("align", "center");
    exitSign.setAttribute("color", "#00ff66");
    exitSign.setAttribute("width", "2");

    marker.appendChild(exitSign);


    // =====================================================
    // MINING PIPE
    // =====================================================

    const pipe = document.createElement("a-cylinder");

    pipe.setAttribute("position", "1.8 1.5 -1");
    pipe.setAttribute("rotation", "0 0 90");
    pipe.setAttribute("radius", "0.12");
    pipe.setAttribute("height", "3");
    pipe.setAttribute("color", "#78909c");

    marker.appendChild(pipe);


    // =====================================================
    // GAS LEAK SOURCE
    // =====================================================

    const leak = document.createElement("a-sphere");

    leak.setAttribute("position", "0.7 1.5 -1");
    leak.setAttribute("radius", "0.35");
    leak.setAttribute("color", "#8cff00");
    leak.setAttribute("opacity", "0.45");

    leak.setAttribute(
        "animation",
        "property: scale; to: 1.6 1.6 1.6; dir: alternate; loop: true; dur: 1200"
    );

    marker.appendChild(leak);


    // =====================================================
    // SMALL GAS PARTICLES
    // =====================================================

    for (let i = 0; i < 10; i++) {

        const particle = document.createElement("a-sphere");

        particle.setAttribute(
            "position",
            `${0.7 + (Math.random() - 0.5) * 0.35}
             ${1.4 + Math.random() * 0.3}
             ${-1 + (Math.random() - 0.5) * 0.35}`
        );

        particle.setAttribute("radius", "0.06");
        particle.setAttribute("color", "#b6ff00");
        particle.setAttribute("opacity", "0.5");

        particle.setAttribute(
            "animation",
            "property: position; to: 0.7 2.8 -1; dir: alternate; loop: true; dur: 1800"
        );

        marker.appendChild(particle);
    }


    // =====================================================
    // REALISTIC GAS CLOUD
    // =====================================================

    for (let i = 0; i < 22; i++) {

        const gas = document.createElement("a-sphere");

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 1.4;

        const x = 0.7 + Math.cos(angle) * distance;
        const y = 1.2 + Math.random() * 1.6;
        const z = -1 + Math.sin(angle) * distance;

        const size = 0.12 + Math.random() * 0.25;

        gas.setAttribute("position", `${x} ${y} ${z}`);
        gas.setAttribute("radius", size);
        gas.setAttribute("color", "#9cff00");
        gas.setAttribute("opacity", "0.18");

        gas.setAttribute(
            "animation",
            `property: position;
             to: ${x + (Math.random() - 0.5) * 0.8}
                 ${y + 0.8 + Math.random() * 0.5}
                 ${z + (Math.random() - 0.5) * 0.8};
             dir: alternate;
             loop: true;
             dur: ${1800 + Math.random() * 1800}`
        );

        gas.setAttribute(
            "animation__scale",
            `property: scale;
             to: 1.8 1.8 1.8;
             dir: alternate;
             loop: true;
             dur: ${1400 + Math.random() * 1000}`
        );

        marker.appendChild(gas);
    }


    // =====================================================
    // WARNING SIGN
    // =====================================================

    const warning = document.createElement("a-text");

    warning.setAttribute("value", "⚠ GAS LEAK");
    warning.setAttribute("position", "0.8 2.5 -1");
    warning.setAttribute("align", "center");
    warning.setAttribute("color", "#ff3333");
    warning.setAttribute("width", "2.5");

    warning.setAttribute(
        "animation",
        "property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 600"
    );

    marker.appendChild(warning);


    // =====================================================
    // PPE HELMET
    // =====================================================

    const helmet = document.createElement("a-sphere");

    helmet.setAttribute("position", "-1.5 0.45 -1.5");
    helmet.setAttribute("radius", "0.35");
    helmet.setAttribute("scale", "1 0.6 1");
    helmet.setAttribute("color", "#f5c400");

    marker.appendChild(helmet);


    // Helmet brim

    const helmetBrim = document.createElement("a-cylinder");

    helmetBrim.setAttribute("position", "-1.5 0.28 -1.5");
    helmetBrim.setAttribute("radius", "0.45");
    helmetBrim.setAttribute("height", "0.08");
    helmetBrim.setAttribute("color", "#f5c400");

    marker.appendChild(helmetBrim);


    // =====================================================
    // SAFETY MASK
    // =====================================================

    const mask = document.createElement("a-box");

    mask.setAttribute("position", "-0.7 0.35 -1.6");
    mask.setAttribute("width", "0.45");
    mask.setAttribute("height", "0.3");
    mask.setAttribute("depth", "0.25");
    mask.setAttribute("color", "#263238");

    marker.appendChild(mask);


    // =====================================================
    // WARNING CONE
    // =====================================================

    const cone = document.createElement("a-cone");

    cone.setAttribute("position", "1.8 0.45 -2");
    cone.setAttribute("radius-bottom", "0.35");
    cone.setAttribute("radius-top", "0.05");
    cone.setAttribute("height", "0.8");
    cone.setAttribute("color", "#ff6d00");

    marker.appendChild(cone);


    // =====================================================
    // TUNNEL SUPPORT BEAMS
    // =====================================================

    for (let z = -3; z <= 3; z += 2) {

        const leftBeam = document.createElement("a-box");

        leftBeam.setAttribute("position", `-2.5 1.5 ${z}`);
        leftBeam.setAttribute("width", "0.25");
        leftBeam.setAttribute("height", "3");
        leftBeam.setAttribute("depth", "0.25");
        leftBeam.setAttribute("color", "#6d6254");

        marker.appendChild(leftBeam);


        const rightBeam = document.createElement("a-box");

        rightBeam.setAttribute("position", `2.5 1.5 ${z}`);
        rightBeam.setAttribute("width", "0.25");
        rightBeam.setAttribute("height", "3");
        rightBeam.setAttribute("depth", "0.25");
        rightBeam.setAttribute("color", "#6d6254");

        marker.appendChild(rightBeam);


        const topBeam = document.createElement("a-box");

        topBeam.setAttribute("position", `0 2.8 ${z}`);
        topBeam.setAttribute("width", "5");
        topBeam.setAttribute("height", "0.25");
        topBeam.setAttribute("depth", "0.25");
        topBeam.setAttribute("color", "#6d6254");

        marker.appendChild(topBeam);
    }


    // =====================================================
    // CEILING LIGHTS
    // =====================================================

    for (let z = -2.5; z <= 2.5; z += 2.5) {

        const light = document.createElement("a-sphere");

        light.setAttribute("position", `0 2.7 ${z}`);
        light.setAttribute("radius", "0.12");
        light.setAttribute("color", "#fff4c2");

        marker.appendChild(light);


        const pointLight = document.createElement("a-light");

        pointLight.setAttribute("type", "point");
        pointLight.setAttribute("position", `0 2.6 ${z}`);
        pointLight.setAttribute("intensity", "0.8");
        pointLight.setAttribute("distance", "5");
        pointLight.setAttribute("color", "#fff4c2");

        marker.appendChild(pointLight);
    }


    // =====================================================
    // CREATE TRAINING UI
    // =====================================================

    createTrainingUI();


    // =====================================================
    // MARKER DETECTED
    // =====================================================

  marker.addEventListener("markerFound", () => {

    console.log("Hiro marker detected.");

    showTrainingWarning();

});


// Start training automatically after the AR scene loads
setTimeout(() => {

    if (!trainingStarted) {

        console.log("Starting safety training.");

        showTrainingWarning();

    }

}, 3000);  


    console.log("Mining tunnel AR scene created.");
}


// =========================================================
// TRAINING STATE
// =========================================================

let currentQuestion = 0;
let score = 0;
let trainingStarted = false;

const questions = [

    {
        question: "What should you do after detecting a gas leak?",
        options: [
            "Continue working",
            "Evacuate the area",
            "Ignore the alarm",
            "Remove your helmet"
        ],
        answer: 1
    },

    {
        question: "Which gas is the primary hazard in this training scenario?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Methane",
            "Carbon dioxide"
        ],
        answer: 2
    },

    {
        question: "What is the appropriate emergency response?",
        options: [
            "Move toward the leak",
            "Stay near the leak",
            "Move away and follow the evacuation procedure",
            "Switch off the tunnel lights and continue working"
        ],
        answer: 2
    }

];


// =========================================================
// CREATE HTML TRAINING UI
// =========================================================

function createTrainingUI() {

    const ui = document.createElement("div");

    ui.id = "trainingUI";

    ui.style.position = "fixed";
    ui.style.left = "50%";
    ui.style.top = "50%";
    ui.style.transform = "translate(-50%, -50%)";
    ui.style.width = "min(90vw, 500px)";
    ui.style.maxHeight = "85vh";
    ui.style.overflowY = "auto";
    ui.style.background = "rgba(10, 10, 10, 0.94)";
    ui.style.color = "white";
    ui.style.padding = "25px";
    ui.style.borderRadius = "16px";
    ui.style.fontFamily = "Arial, sans-serif";
    ui.style.zIndex = "9999";
    ui.style.boxSizing = "border-box";
    ui.style.display = "none";
    ui.style.textAlign = "center";
    ui.style.boxShadow = "0 0 30px rgba(0,0,0,0.7)";

    document.body.appendChild(ui);
}


// =========================================================
// SHOW GAS WARNING
// =========================================================

function showTrainingWarning() {

    if (trainingStarted) {
        return;
    }

    trainingStarted = true;

    const ui = document.getElementById("trainingUI");

    ui.style.display = "block";

    ui.innerHTML = `
        <div style="font-size:45px;">⚠️</div>

        <h2 style="color:#ff3333;">
            GAS LEAK DETECTED
        </h2>

        <p style="font-size:17px;">
            A possible methane gas leak has been detected.
        </p>

        <p>
            Move away from the hazard and follow the emergency procedure.
        </p>

        <button
            id="startQuizButton"
            style="
                margin-top:15px;
                padding:13px 25px;
                font-size:16px;
                font-weight:bold;
                background:#2e7d32;
                color:white;
                border:none;
                border-radius:8px;
                cursor:pointer;
            ">
            START SAFETY QUIZ
        </button>
    `;

    document
        .getElementById("startQuizButton")
        .addEventListener("click", startQuiz);
}


// =========================================================
// START QUIZ
// =========================================================

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    showQuestion();

}


// =========================================================
// SHOW QUESTION
// =========================================================

function showQuestion() {

    const ui = document.getElementById("trainingUI");

    const q = questions[currentQuestion];

    ui.style.display = "block";

    let optionsHTML = "";

    q.options.forEach((option, index) => {

        optionsHTML += `
            <button
                class="quizOption"
                data-index="${index}"
                style="
                    display:block;
                    width:100%;
                    margin:10px 0;
                    padding:13px;
                    font-size:15px;
                    background:#263238;
                    color:white;
                    border:1px solid #607d8b;
                    border-radius:8px;
                    cursor:pointer;
                ">
                ${option}
            </button>
        `;

    });


    ui.innerHTML = `

        <div style="font-size:13px;color:#aaa;">
            SAFETY TRAINING
        </div>

        <h2>
            Question ${currentQuestion + 1} / ${questions.length}
        </h2>

        <p style="
            font-size:18px;
            line-height:1.4;
        ">
            ${q.question}
        </p>

        <div>
            ${optionsHTML}
        </div>

        <p style="font-size:13px;color:#aaa;">
            Score: ${score}
        </p>
    `;


    const buttons = document.querySelectorAll(".quizOption");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selected = Number(button.dataset.index);

            checkAnswer(selected);

        });

    });

}


// =========================================================
// CHECK ANSWER
// =========================================================

function checkAnswer(selected) {

    const correct = questions[currentQuestion].answer;

    if (selected === correct) {

        score++;

        showFeedback(
            "CORRECT",
            "Good decision. This is the appropriate safety response.",
            true
        );

    } else {

        showFeedback(
            "INCORRECT",
            "This action is unsafe in a gas-leak situation.",
            false
        );

    }

}



// =========================================================
// FEEDBACK
// =========================================================

function showFeedback(title, message, correct) {

    const ui = document.getElementById("trainingUI");

    const feedbackColor = correct
        ? "#00ff66"
        : "#ff3333";

    ui.innerHTML = `

        <div style="
            font-size:45px;
            color:${feedbackColor};
        ">
            ${correct ? "✓" : "✕"}
        </div>

        <h2 style="color:${feedbackColor};">
            ${title}
        </h2>

        <p style="font-size:17px;">
            ${message}
        </p>

        <button
            id="nextQuestionButton"
            style="
                margin-top:15px;
                padding:13px 25px;
                font-size:16px;
                font-weight:bold;
                background:#455a64;
                color:white;
                border:none;
                border-radius:8px;
                cursor:pointer;
            ">
            ${currentQuestion < questions.length - 1
                ? "NEXT QUESTION"
                : "VIEW RESULT"}
        </button>
    `;


    document
        .getElementById("nextQuestionButton")
        .addEventListener("click", () => {

            if (currentQuestion < questions.length - 1) {

                currentQuestion++;

                showQuestion();

            } else {

                showResult();

            }

        });

}


// =========================================================
// FINAL RESULT
// =========================================================

function showResult() {

    const ui = document.getElementById("trainingUI");

    const percentage =
        Math.round((score / questions.length) * 100);

    let resultMessage;

    if (percentage >= 80) {

        resultMessage =
            "Good safety awareness. You demonstrated appropriate emergency decision-making.";

    } else if (percentage >= 50) {

        resultMessage =
            "Basic understanding demonstrated. Additional safety training is recommended.";

    } else {

        resultMessage =
            "Further safety training is required before working in a gas-leak situation.";

    }


    ui.innerHTML = `

        <div style="font-size:45px;">
            🛡️
        </div>

        <h2>
            TRAINING COMPLETE
        </h2>

        <h1 style="font-size:40px;">
            ${score} / ${questions.length}
        </h1>

        <p style="font-size:20px;">
            Score: ${percentage}%
        </p>

        <p style="
            font-size:16px;
            line-height:1.5;
        ">
            ${resultMessage}
        </p>

        <button
            id="restartTrainingButton"
            style="
                margin-top:15px;
                padding:13px 25px;
                font-size:16px;
                font-weight:bold;
                background:#2e7d32;
                color:white;
                border:none;
                border-radius:8px;
                cursor:pointer;
            ">
            RESTART TRAINING
        </button>
    `;


    // Save result
    sendTrainingResult();


    // Restart button
    document
        .getElementById("restartTrainingButton")
        .addEventListener("click", () => {

            currentQuestion = 0;
            score = 0;

            showQuestion();

        });

}


// =========================================================
// SEND RESULT TO SERVER
// =========================================================

function sendTrainingResult() {

    fetch("/api/training-result", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            score: score,

            totalQuestions: questions.length,

            percentage:
                Math.round(
                    (score / questions.length) * 100
                ),

            completedAt:
                new Date().toISOString()

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log(
            "Training result saved:",
            data
        );

    })

    .catch(error => {

        console.log(
            "Could not save training result:",
            error
        );

    });

}
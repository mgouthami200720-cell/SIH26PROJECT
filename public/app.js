// ============================================================
// MINING GAS LEAK SAFETY TRAINING
// app.js
// ============================================================


// ============================================================
// 1. GLOBAL VARIABLES
// ============================================================

let selectedLanguage = "english";

let currentQuestionIndex = 0;
let score = 0;
let questionStartTime = 0;
let totalResponseTime = 0;

let userAnswers = [];
let questionResults = [];

let trainingStarted = false;
let quizFinished = false;
let retrainingQuestions = [];
let currentRetrainingIndex = 0;


// ============================================================
// 2. TEN QUESTION QUIZ
// ============================================================

const questions = [

    // ----------------------------------------------------------
    // QUESTION 1
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "You notice a gas leak inside the mining area. What should you do first?",

        questionHindi:
            "आपको खनन क्षेत्र में गैस रिसाव दिखाई देता है। सबसे पहले आपको क्या करना चाहिए?",

        optionsEnglish: [
            "Run deeper into the mine",
            "Raise the alarm and move to a safe area",
            "Ignore it",
            "Switch on unnecessary electrical equipment"
        ],

        optionsHindi: [
            "खदान के अंदर और आगे जाएं",
            "अलार्म बजाएं और सुरक्षित क्षेत्र में जाएं",
            "इसे नजरअंदाज करें",
            "अनावश्यक विद्युत उपकरण चालू करें"
        ],

        correctAnswer: 1,

        category: "Immediate Response",

        explanationEnglish:
            "The correct first response is to raise the alarm and move toward a safe area.",

        explanationHindi:
            "सही पहला कदम अलार्म बजाना और सुरक्षित क्षेत्र की ओर जाना है।"
    },


    // ----------------------------------------------------------
    // QUESTION 2
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "Why should workers avoid using electrical switches near a suspected gas leak?",

        questionHindi:
            "संदिग्ध गैस रिसाव के पास विद्युत स्विच का उपयोग क्यों नहीं करना चाहिए?",

        optionsEnglish: [
            "It wastes electricity",
            "It may create a spark and increase the danger",
            "It makes the mine darker",
            "It slows down the workers"
        ],

        optionsHindi: [
            "इससे बिजली बर्बाद होती है",
            "इससे चिंगारी पैदा हो सकती है और खतरा बढ़ सकता है",
            "इससे खदान अंधेरी हो जाती है",
            "इससे कर्मचारी धीमे हो जाते हैं"
        ],

        correctAnswer: 1,

        category: "Hazard Identification",

        explanationEnglish:
            "An electrical switch can potentially create a spark, which can be dangerous in a gas-leak situation.",

        explanationHindi:
            "विद्युत स्विच से चिंगारी उत्पन्न हो सकती है, जो गैस रिसाव की स्थिति में खतरनाक हो सकती है।"
    },


    // ----------------------------------------------------------
    // QUESTION 3
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "What is the safest direction to move after detecting a gas leak?",

        questionHindi:
            "गैस रिसाव का पता चलने के बाद किस दिशा में जाना सबसे सुरक्षित है?",

        optionsEnglish: [
            "Toward the suspected leak",
            "Toward a marked safe exit",
            "Deeper into the mine",
            "Toward electrical equipment"
        ],

        optionsHindi: [
            "गैस रिसाव की ओर",
            "चिह्नित सुरक्षित निकास की ओर",
            "खदान के और अंदर",
            "विद्युत उपकरणों की ओर"
        ],

        correctAnswer: 1,

        category: "Emergency Response",

        explanationEnglish:
            "Workers should follow the marked evacuation route toward a safe exit.",

        explanationHindi:
            "कर्मचारियों को सुरक्षित निकास की ओर चिह्नित निकासी मार्ग का पालन करना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 4
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "What is the main purpose of an emergency alarm in a mining environment?",

        questionHindi:
            "खनन क्षेत्र में आपातकालीन अलार्म का मुख्य उद्देश्य क्या है?",

        optionsEnglish: [
            "To entertain workers",
            "To warn workers about danger",
            "To control the temperature",
            "To increase production"
        ],

        optionsHindi: [
            "कर्मचारियों का मनोरंजन करना",
            "कर्मचारियों को खतरे के बारे में चेतावनी देना",
            "तापमान नियंत्रित करना",
            "उत्पादन बढ़ाना"
        ],

        correctAnswer: 1,

        category: "Emergency Response",

        explanationEnglish:
            "An emergency alarm provides an immediate warning so workers can follow safety procedures.",

        explanationHindi:
            "आपातकालीन अलार्म तुरंत चेतावनी देता है ताकि कर्मचारी सुरक्षा प्रक्रिया का पालन कर सकें।"
    },


    // ----------------------------------------------------------
    // QUESTION 5
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "Which sign should a worker follow during evacuation?",

        questionHindi:
            "निकासी के दौरान कर्मचारी को किस संकेत का पालन करना चाहिए?",

        optionsEnglish: [
            "Exit sign",
            "Storage sign",
            "Machine warning only",
            "No-entry sign for another area"
        ],

        optionsHindi: [
            "निकास संकेत",
            "भंडारण संकेत",
            "केवल मशीन चेतावनी",
            "दूसरे क्षेत्र का प्रवेश निषेध संकेत"
        ],

        correctAnswer: 0,

        category: "Emergency Response",

        explanationEnglish:
            "Workers should follow clearly marked emergency exit signs during evacuation.",

        explanationHindi:
            "निकासी के दौरान कर्मचारियों को स्पष्ट रूप से चिह्नित आपातकालीन निकास संकेतों का पालन करना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 6
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "You see another worker moving toward the gas-leak area. What is the safest action?",

        questionHindi:
            "आप दूसरे कर्मचारी को गैस रिसाव वाले क्षेत्र की ओर जाते देखते हैं। सबसे सुरक्षित कार्रवाई क्या है?",

        optionsEnglish: [
            "Follow them",
            "Warn them and direct them toward a safe area",
            "Ignore them",
            "Ask them to switch on equipment"
        ],

        optionsHindi: [
            "उनके पीछे जाएं",
            "उन्हें चेतावनी दें और सुरक्षित क्षेत्र की ओर निर्देशित करें",
            "उन्हें नजरअंदाज करें",
            "उन्हें उपकरण चालू करने के लिए कहें"
        ],

        correctAnswer: 1,

        category: "Decision Making",

        explanationEnglish:
            "The worker should be warned and directed away from the hazardous area.",

        explanationHindi:
            "कर्मचारी को चेतावनी देकर खतरनाक क्षेत्र से दूर सुरक्षित स्थान की ओर भेजना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 7
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "Why is gas leakage considered a serious workplace hazard?",

        questionHindi:
            "गैस रिसाव को गंभीर कार्यस्थल खतरा क्यों माना जाता है?",

        optionsEnglish: [
            "It can create dangerous conditions for workers",
            "It makes equipment look old",
            "It reduces the number of signs",
            "It changes the colour of walls"
        ],

        optionsHindi: [
            "यह कर्मचारियों के लिए खतरनाक स्थिति पैदा कर सकता है",
            "यह उपकरण को पुराना दिखाता है",
            "यह संकेतों की संख्या कम करता है",
            "यह दीवारों का रंग बदलता है"
        ],

        correctAnswer: 0,

        category: "Hazard Identification",

        explanationEnglish:
            "A gas leak can create serious safety hazards, so workers must follow emergency procedures.",

        explanationHindi:
            "गैस रिसाव गंभीर सुरक्षा खतरे पैदा कर सकता है, इसलिए कर्मचारियों को आपातकालीन प्रक्रिया का पालन करना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 8
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "What should a worker do after reaching a safe location?",

        questionHindi:
            "सुरक्षित स्थान पर पहुंचने के बाद कर्मचारी को क्या करना चाहिए?",

        optionsEnglish: [
            "Return immediately to the leak",
            "Report the situation and wait for further instructions",
            "Turn on machinery",
            "Go back alone to investigate"
        ],

        optionsHindi: [
            "तुरंत रिसाव वाले स्थान पर वापस जाएं",
            "स्थिति की सूचना दें और आगे के निर्देशों की प्रतीक्षा करें",
            "मशीनरी चालू करें",
            "अकेले वापस जाकर जांच करें"
        ],

        correctAnswer: 1,

        category: "Emergency Response",

        explanationEnglish:
            "After reaching safety, the worker should report the incident and follow instructions from responsible personnel.",

        explanationHindi:
            "सुरक्षित स्थान पर पहुंचने के बाद कर्मचारी को घटना की सूचना देनी चाहिए और जिम्मेदार अधिकारियों के निर्देशों का पालन करना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 9
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "Which behaviour should be avoided during a gas-leak emergency?",

        questionHindi:
            "गैस रिसाव की आपात स्थिति में किस व्यवहार से बचना चाहिए?",

        optionsEnglish: [
            "Following the evacuation route",
            "Raising the alarm",
            "Returning to investigate the leak yourself",
            "Moving toward a safe area"
        ],

        optionsHindi: [
            "निकासी मार्ग का पालन करना",
            "अलार्म बजाना",
            "खुद रिसाव की जांच करने के लिए वापस जाना",
            "सुरक्षित क्षेत्र की ओर जाना"
        ],

        correctAnswer: 2,

        category: "Decision Making",

        explanationEnglish:
            "Workers should not return to investigate a hazardous leak themselves.",

        explanationHindi:
            "कर्मचारियों को स्वयं खतरनाक गैस रिसाव की जांच करने के लिए वापस नहीं जाना चाहिए।"
    },


    // ----------------------------------------------------------
    // QUESTION 10
    // ----------------------------------------------------------

    {
        type: "mcq",

        questionEnglish:
            "What is the overall goal of an industrial safety training simulator?",

        questionHindi:
            "औद्योगिक सुरक्षा प्रशिक्षण सिम्युलेटर का मुख्य उद्देश्य क्या है?",

        optionsEnglish: [
            "To replace all safety rules",
            "To help workers practise safe decision-making in simulated situations",
            "To make workers ignore hazards",
            "To increase the complexity of machines"
        ],

        optionsHindi: [
            "सभी सुरक्षा नियमों को बदलना",
            "सिम्युलेटेड परिस्थितियों में सुरक्षित निर्णय लेने का अभ्यास कराना",
            "कर्मचारियों को खतरों को नजरअंदाज करने देना",
            "मशीनों की जटिलता बढ़ाना"
        ],

        correctAnswer: 1,

        category: "Overall Safety",

        explanationEnglish:
            "The simulator provides a controlled environment where trainees can practise identifying hazards and responding safely.",

        explanationHindi:
            "सिम्युलेटर एक नियंत्रित वातावरण प्रदान करता है जहां प्रशिक्षु खतरों की पहचान और सुरक्षित प्रतिक्रिया का अभ्यास कर सकते हैं।"
    }

];


// ============================================================
// 3. LANGUAGE
// ============================================================

function getText(english, hindi) {
    return selectedLanguage === "hindi" ? hindi : english;
}


function speakText(text, language = selectedLanguage) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
}

    const utterance = new SpeechSynthesisUtterance(text);

    if (language === "hindi") {
        utterance.lang = "hi-IN";
    } else {
        utterance.lang = "en-IN";
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
}


// ============================================================
// 4. START TRAINING
// ============================================================

function startTraining() {

    trainingStarted = true;
    quizFinished = false;

    currentQuestionIndex = 0;
    score = 0;
    totalResponseTime = 0;

    userAnswers = [];
    questionResults = [];

    window.speechSynthesis.cancel();

    // Safely hide old result elements if they exist.
    ["result", "hazardResult", "emergencyResult"].forEach(function(id) {

        const element = document.getElementById(id);

        if (element) {
            element.innerText = "";
        }

    });

    // Hide old question blocks if present.
    hideOldQuestions();

    // Hide old evaluation panels.
    hideElement("evaluation");
    hideElement("weakAnalysis");
    hideElement("retrainingPanel");

    // Show training panel.
    const trainingPanel = document.getElementById("trainingPanel");

    if (trainingPanel) {
        trainingPanel.style.display = "block";
    }

    // Create the dynamic quiz area.
    createTenQuestionArea();

    // Start first question.
    showQuestion();

    // Scroll to quiz.
    setTimeout(function() {

        const questionArea = document.getElementById("questionArea");

        if (questionArea) {
            questionArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }, 200);
}


// ============================================================
// 5. HIDE OLD QUESTIONS
// ============================================================

function hideOldQuestions() {

    const ids = [

        "question1",
        "question2",
        "question3",

        "q1Title",
        "q1Question",
        "q1Options",
        "q1Correct",

        "q2Title",
        "q2Question",
        "q2Options",
        "q2Correct",

        "q3Title",
        "q3Question",
        "q3Options",
        "q3Correct"

    ];

    ids.forEach(function(id) {

        const element = document.getElementById(id);

        if (element) {
            element.style.display = "none";
        }

    });
}


// ============================================================
// 6. CREATE QUIZ CONTAINER
// ============================================================

function createTenQuestionArea() {

    let area = document.getElementById("tenQuestionArea");

    if (area) {
        area.remove();
    }

    const questionArea = document.getElementById("questionArea");

    if (!questionArea) {
        console.error("questionArea was not found in index.html");
        return;
    }

    area = document.createElement("div");

    area.id = "tenQuestionArea";

    area.style.width = "100%";

    questionArea.innerHTML = "";
    questionArea.appendChild(area);
}


// ============================================================
// 7. SHOW CURRENT QUESTION
// ============================================================

function showQuestion() {

    const area = document.getElementById("tenQuestionArea");

    if (!area) {
        console.error("tenQuestionArea not found.");
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        finishTenQuestionTraining();
        return;
    }

    const question = questions[currentQuestionIndex];

    questionStartTime = Date.now();

    const questionNumber = currentQuestionIndex + 1;

    const questionText =
        getText(
            question.questionEnglish,
            question.questionHindi
        );

    const options =
        selectedLanguage === "hindi"
            ? question.optionsHindi
            : question.optionsEnglish;


    // ----------------------------------------------------------
    // BUILD QUESTION HTML
    // ----------------------------------------------------------

    area.innerHTML = "";

    const card = document.createElement("div");

    card.className = "training-card";

    card.style.padding = "20px";
    card.style.marginTop = "20px";


    // Progress
    const progress = document.createElement("div");

    progress.style.marginBottom = "15px";
    progress.style.fontWeight = "bold";

    progress.innerText =
        "Question " +
        questionNumber +
        " / " +
        questions.length;

    card.appendChild(progress);


    // Question
    const title = document.createElement("h3");

    title.innerText = questionText;

    title.style.marginBottom = "20px";

    card.appendChild(title);


    // Options
    const optionsContainer = document.createElement("div");

    optionsContainer.id = "optionsContainer";


    options.forEach(function(option, index) {

        const optionButton = document.createElement("button");

        optionButton.type = "button";

        optionButton.className = "quiz-option";

        optionButton.innerText =
            String.fromCharCode(65 + index) +
            ". " +
            option;

        optionButton.style.display = "block";
        optionButton.style.width = "100%";
        optionButton.style.marginBottom = "10px";
        optionButton.style.padding = "12px";
        optionButton.style.textAlign = "left";
        optionButton.style.cursor = "pointer";


        optionButton.onclick = function() {

            selectAnswer(index);

        };


        optionsContainer.appendChild(optionButton);

    });


    card.appendChild(optionsContainer);


    // Status message
    const status = document.createElement("div");

    status.id = "quizStatus";

    status.style.marginTop = "15px";
    status.style.fontWeight = "bold";

    card.appendChild(status);


    // Next button
    const nextButton = document.createElement("button");

    nextButton.id = "nextQuestionButton";

    nextButton.type = "button";

    nextButton.innerText =
        currentQuestionIndex === questions.length - 1
            ? "Finish Training"
            : "Next Question";

    nextButton.style.display = "none";

    nextButton.style.marginTop = "15px";
    nextButton.style.padding = "12px 20px";
    nextButton.style.cursor = "pointer";

    nextButton.onclick = function() {

        goToNextQuestion();

    };

    card.appendChild(nextButton);


    area.appendChild(card);


    // ----------------------------------------------------------
    // VOICE
    // ----------------------------------------------------------

    const optionsText = options
    .map(function(option, index) {
        return String.fromCharCode(65 + index) + ". " + option;
    })
    .join(". ");

speakText(
    questionText + ". " + optionsText,
    selectedLanguage
);

}


// ============================================================
// 8. SELECT ANSWER
// ============================================================

function selectAnswer(selectedAnswer) {

    const question = questions[currentQuestionIndex];

    const responseTime =
        (Date.now() - questionStartTime) / 1000;

    totalResponseTime += responseTime;


    const isCorrect =
        selectedAnswer === question.correctAnswer;


    if (isCorrect) {
        score += 10;
    }


    userAnswers[currentQuestionIndex] = selectedAnswer;

    questionResults[currentQuestionIndex] = {

        questionNumber:
            currentQuestionIndex + 1,

        category:
            question.category,

        selectedAnswer:
            selectedAnswer,

        correctAnswer:
            question.correctAnswer,

        correct:
            isCorrect,

        responseTime:
            responseTime

    };


    // Disable all buttons.
    const buttons =
        document.querySelectorAll(".quiz-option");

    buttons.forEach(function(button, index) {

        button.disabled = true;

        button.style.cursor = "default";


        if (index === question.correctAnswer) {

            button.style.border =
                "3px solid green";

        }


        if (
            index === selectedAnswer &&
            !isCorrect
        ) {

            button.style.border =
                "3px solid red";

        }

    });


    // Status
    const status =
        document.getElementById("quizStatus");


    if (status) {

        if (isCorrect) {

            status.innerText =
                selectedLanguage === "hindi"
                    ? "✓ सही उत्तर!"
                    : "✓ Correct answer!";

        } else {

            const correctOption =
                selectedLanguage === "hindi"
                    ? question.optionsHindi[question.correctAnswer]
                    : question.optionsEnglish[question.correctAnswer];

            status.innerText =
                selectedLanguage === "hindi"
                    ? "✗ गलत उत्तर। सही उत्तर: " + correctOption
                    : "✗ Incorrect. Correct answer: " + correctOption;

        }

    }


    // Show explanation through voice.
    const explanation =
        getText(
            question.explanationEnglish,
            question.explanationHindi
        );

    speakText(explanation, selectedLanguage);


    // Show next button.
    const nextButton =
        document.getElementById(
            "nextQuestionButton"
        );

    if (nextButton) {
        nextButton.style.display = "inline-block";
    }

}


// ============================================================
// 9. NEXT QUESTION
// ============================================================

function goToNextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {

        finishTenQuestionTraining();

        return;
    }

    showQuestion();

}


// ============================================================
// 10. FINISH TRAINING
// ============================================================

function finishTenQuestionTraining() {

    if (quizFinished) {
        return;
    }

    quizFinished = true;

    window.speechSynthesis.cancel();

    const questionArea =
        document.getElementById("questionArea");

    if (questionArea) {
        questionArea.style.display = "none";
    }


    showEvaluation();

    showWeakAreaAnalysis();

    saveTrainingResult();

}


// ============================================================
// 11. EVALUATION
// ============================================================

function showEvaluation() {

    const evaluation =
        document.getElementById("evaluation");

    if (!evaluation) {
        return;
    }


    evaluation.style.display = "block";


    const percentage =
        score;


    let performanceText = "";

    if (score >= 90) {

        performanceText =
            selectedLanguage === "hindi"
                ? "उत्कृष्ट प्रदर्शन"
                : "Excellent performance";

    } else if (score >= 70) {

        performanceText =
            selectedLanguage === "hindi"
                ? "अच्छा प्रदर्शन"
                : "Good performance";

    } else if (score >= 50) {

        performanceText =
            selectedLanguage === "hindi"
                ? "सुधार की आवश्यकता है"
                : "Needs improvement";

    } else {

        performanceText =
            selectedLanguage === "hindi"
                ? "अधिक प्रशिक्षण आवश्यक है"
                : "More training is required";

    }


    evaluation.innerHTML = `

        <div class="training-card"
             style="padding:20px; margin-top:20px;">

            <h2>
                ${selectedLanguage === "hindi"
                    ? "प्रशिक्षण मूल्यांकन"
                    : "Training Evaluation"}
            </h2>

            <h3>
                ${selectedLanguage === "hindi"
                    ? "स्कोर"
                    : "Score"}:
                ${score} / 100
            </h3>

            <p>
                <strong>
                    ${performanceText}
                </strong>
            </p>

            <p>
                ${selectedLanguage === "hindi"
                    ? "कुल प्रतिक्रिया समय"
                    : "Total response time"}:
                ${totalResponseTime.toFixed(1)} seconds
            </p>

            <p>
                ${selectedLanguage === "hindi"
                    ? "सही उत्तर"
                    : "Correct answers"}:
                ${Math.round(score / 10)} / ${questions.length}
            </p>

        </div>

    `;


    evaluation.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ============================================================
// 12. WEAK AREA ANALYSIS
// ============================================================

function showWeakAreaAnalysis() {

    const weakAnalysis =
        document.getElementById("weakAnalysis");

    if (!weakAnalysis) {
        return;
    }


    const categoryStats = {};


    questions.forEach(function(question, index) {

        const category =
            question.category;


        if (!categoryStats[category]) {

            categoryStats[category] = {

                total: 0,
                wrong: 0

            };

        }


        categoryStats[category].total++;


        if (
            !questionResults[index] ||
            !questionResults[index].correct
        ) {

            categoryStats[category].wrong++;

        }

    });


    let weakCategories = [];


    Object.keys(categoryStats).forEach(function(category) {

        const data =
            categoryStats[category];


        if (data.wrong > 0) {

            weakCategories.push({

                category: category,

                wrong: data.wrong,

                total: data.total

            });

        }

    });


    weakAnalysis.style.display = "block";


    let html = `

        <div class="training-card"
             style="padding:20px; margin-top:20px;">

            <h2>
                ${selectedLanguage === "hindi"
                    ? "कमजोर क्षेत्र विश्लेषण"
                    : "Weak Area Analysis"}
            </h2>

    `;


    if (weakCategories.length === 0) {

        html += `

            <p>
                ${selectedLanguage === "hindi"
                    ? "आपने सभी प्रश्न सही किए। किसी कमजोर क्षेत्र की पहचान नहीं हुई।"
                    : "You answered all questions correctly. No weak area was identified."}
            </p>

        `;

    } else {

        html += `

            <p>
                ${selectedLanguage === "hindi"
                    ? "अधिक अभ्यास की आवश्यकता वाले क्षेत्र:"
                    : "Areas that need more practice:"}
            </p>

            <ul>

        `;


        weakCategories.forEach(function(item) {

            html += `

                <li>

                    ${item.category}
                    -
                    ${item.wrong}
                    ${selectedLanguage === "hindi"
                        ? "गलत"
                        : "incorrect"}

                </li>

            `;

        });


        html += `

            </ul>

        `;

    }


    html += `</div>`;


    weakAnalysis.innerHTML = html;


    showRetrainingPanel(weakCategories);

}


// ============================================================
// 13. PERSONALIZED RETRAINING
// ============================================================

function showRetrainingPanel(weakCategories) {

    const panel =
        document.getElementById("retrainingPanel");

    if (!panel) {
        return;
    }


    panel.style.display = "block";


    let message;


    if (weakCategories.length === 0) {

        message =
            selectedLanguage === "hindi"

                ? "बहुत अच्छा। आपने सभी सुरक्षा प्रश्न सही किए।"

                : "Good performance. You answered all safety questions correctly.";

    } else {

        const weakNames =
            weakCategories
                .map(function(item) {
                    return item.category;
                })
                .join(", ");


        message =
            selectedLanguage === "hindi"

                ? "आपके कमजोर क्षेत्र: " +
                  weakNames +
                  ". इन क्षेत्रों पर दोबारा प्रशिक्षण करें।"

                : "Your weak areas are: " +
                  weakNames +
                  ". Retraining is recommended for these areas.";

    }


    panel.innerHTML = `

        <div class="training-card"
             style="padding:20px; margin-top:20px;">

            <h2>
                ${selectedLanguage === "hindi"
                    ? "व्यक्तिगत पुनःप्रशिक्षण"
                    : "Personalized Retraining"}
            </h2>

            <p id="retrainingMessage">
                ${message}
            </p>

            <button
                type="button"
                onclick="speakRetraining()"
                style="padding:12px 20px; cursor:pointer;">

                ${selectedLanguage === "hindi"
                    ? "🔊 पुनःप्रशिक्षण सुनें"
                    : "🔊 Listen to Retraining"}

            </button>

        </div>

    `;


    // Automatically speak the retraining message.
    setTimeout(function() {

        speakText(
            message,
            selectedLanguage
        );

    }, 700);

}


// ============================================================
// 14. SPEAK RETRAINING
// ============================================================

function speakRetraining() {

    const element =
        document.getElementById(
            "retrainingMessage"
        );

    if (!element) {
        return;
    }


    speakText(
        element.innerText,
        selectedLanguage
    );

}


// ============================================================
// 15. SAVE TRAINING RESULT
// ============================================================

async function saveTrainingResult() {

    const result = {

        score: score,

        totalQuestions:
            questions.length,

        correctAnswers:
            Math.round(score / 10),

        totalResponseTime:
            Number(totalResponseTime.toFixed(2)),

        language:
            selectedLanguage,

        completedAt:
            new Date().toISOString(),

        answers:
            questionResults

    };


    // Save locally.
    try {

        localStorage.setItem(
            "miningSafetyTrainingResult",
            JSON.stringify(result)
        );

    } catch (error) {

        console.warn(
            "Could not save result to localStorage:",
            error
        );

    }


    // Send to Node.js server.
    try {

        const response =
            await fetch(
                "/api/training-result",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(result)
                }
            );


        if (response.ok) {

            console.log(
                "Training result sent to server."
            );

        } else {

            console.warn(
                "Server returned:",
                response.status
            );

        }

    } catch (error) {

        console.warn(
            "Could not send result to server:",
            error
        );

    }


    // Generate QR/result if the HTML supports it.
    generateResultQR(result);

}


// ============================================================
// 16. RESULT QR
// ============================================================

function generateResultQR(result) {

    const qrContainer = document.getElementById("qrCode");

    if (!qrContainer || !result) {
        return;
    }

    const resultText =
        "Mining Safety Training" +
        "\nScore: " +
        result.score +
        "/100" +
        "\nCorrect: " +
        result.correctAnswers +
        "/" +
        result.totalQuestions;

    qrContainer.innerHTML = "";

    const qrImage = document.createElement("img");

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
        encodeURIComponent(resultText);

    qrImage.alt = "Training Result QR Code";

    qrImage.style.width = "220px";
    qrImage.style.height = "220px";
    qrImage.style.maxWidth = "100%";

    qrContainer.appendChild(qrImage);

}


// ============================================================
// 17. AR FUNCTIONS
// ============================================================
// These functions intentionally remain simple.
// They do NOT change your existing A-Frame AR scene.

// ============================================================
// 17. AR FUNCTIONS
// ============================================================

function showARScene() {

    const trainingPanel =
        document.getElementById("trainingPanel");

    const arSceneContainer =
        document.getElementById("arSceneContainer");

    const arStatus =
        document.getElementById("arStatus");

    if (trainingPanel) {
        trainingPanel.style.display = "none";
    }

    if (arSceneContainer) {
        arSceneContainer.style.display = "block";
        arSceneContainer.style.visibility = "visible";
        arSceneContainer.style.pointerEvents = "auto";
    }

    if (arStatus) {
        arStatus.innerText =
            "Move your phone slowly to scan the area.";
    }

    setTimeout(function () {

        const scene =
            document.getElementById("mineScene");

        if (scene) {

            if (typeof scene.resize === "function") {
                scene.resize();
            }

            scene.emit("resize");
        }

        window.dispatchEvent(
            new Event("resize")
        );

    }, 500);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToTraining() {

    const trainingPanel =
        document.getElementById("trainingPanel");

    const arSceneContainer =
        document.getElementById("arSceneContainer");

    if (arSceneContainer) {
        arSceneContainer.style.display = "none";
        arSceneContainer.style.visibility = "hidden";
        arSceneContainer.style.pointerEvents = "none";
    }

    if (trainingPanel) {
        trainingPanel.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ============================================================
// 18. GAS LEAK ACTIVATION
// ============================================================

function activateGasLeak() {

    const gasLeak =
        document.getElementById("gasLeak");

    const leakStatus =
        document.getElementById("leakStatus");


    if (gasLeak) {

        gasLeak.setAttribute(
            "visible",
            "true"
        );

    }


    if (leakStatus) {

        const message =
            selectedLanguage === "hindi"

                ? "🚨 गैस रिसाव सक्रिय है। सुरक्षित प्रक्रिया का पालन करें।"

                : "🚨 Gas leak is active. Follow the safety procedure.";


        leakStatus.style.display = "block";

        leakStatus.innerText =
            message;


        speakText(
            message,
            selectedLanguage
        );

    }

}


// ============================================================
// 19. LANGUAGE SELECTION
// ============================================================

function selectLanguage(language) {

    if (
        language === "hindi" ||
        language === "english"
    ) {

        selectedLanguage =
            language;

    }


    // If quiz is already running,
    // refresh the current question.
    if (
        trainingStarted &&
        !quizFinished &&
        document.getElementById("tenQuestionArea")
    ) {

        showQuestion();

    }

}


// ============================================================
// 20. SAFE ELEMENT HELPERS
// ============================================================

function hideElement(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.style.display =
            "none";

    }

}


// ============================================================
// 21. PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Mining Safety Training app loaded."
        );

        console.log(
            "Quiz questions:",
            questions.length
        );


        // Make sure old quiz result panels
        // are hidden when page first loads.

        hideElement("evaluation");

        hideElement("weakAnalysis");

        hideElement("retrainingPanel");

    }
);
// ============================================================
// 22. START RETRAINING
// ============================================================

function startRetraining() {

    // Find questions that the user answered incorrectly.
    retrainingQuestions = questions.filter(function(question, index) {

        return (
            questionResults[index] &&
            !questionResults[index].correct
        );

    });


    // If there are no weak questions.
    if (retrainingQuestions.length === 0) {

        const panel =
            document.getElementById("retrainingPanel");

        if (panel) {

            panel.innerHTML = `

                <div class="training-card"
                     style="padding:20px; margin-top:20px;">

                    <h2>
                        ${selectedLanguage === "hindi"
                            ? "पुनःप्रशिक्षण"
                            : "Retraining"}
                    </h2>

                    <p>
                        ${selectedLanguage === "hindi"
                            ? "कोई कमजोर क्षेत्र नहीं मिला। पुनःप्रशिक्षण की आवश्यकता नहीं है।"
                            : "No weak areas were found. Retraining is not required."}
                    </p>

                </div>

            `;

        }

        return;
    }


    // Start from the first weak question.
    currentRetrainingIndex = 0;


    // Hide previous result sections.
    hideElement("evaluation");
    hideElement("weakAnalysis");


    // Hide the Start Retraining button.
    const retrainingButton =
        document.getElementById("retrainingButton");

    if (retrainingButton) {
        retrainingButton.style.display = "none";
    }


    // Show the retraining panel.
    const panel =
        document.getElementById("retrainingPanel");

    if (!panel) {
        return;
    }

    panel.style.display = "block";


    // Display first retraining question.
    showRetrainingQuestion();

}


// ============================================================
// 23. SHOW RETRAINING QUESTION
// ============================================================

function showRetrainingQuestion() {

    const panel =
        document.getElementById("retrainingPanel");

    if (!panel) {
        return;
    }


    // Check whether retraining is finished.
    if (
        currentRetrainingIndex >=
        retrainingQuestions.length
    ) {

        finishRetraining();

        return;
    }


    const question =
        retrainingQuestions[currentRetrainingIndex];


    const questionText =
        getText(
            question.questionEnglish,
            question.questionHindi
        );


    const options =
        selectedLanguage === "hindi"
            ? question.optionsHindi
            : question.optionsEnglish;


    panel.innerHTML = `

        <div class="training-card"
             style="padding:20px; margin-top:20px;">

            <div style="font-weight:bold; margin-bottom:15px;">

                ${selectedLanguage === "hindi"
                    ? "पुनःप्रशिक्षण प्रश्न"
                    : "Retraining Question"}

                ${currentRetrainingIndex + 1}
                /
                ${retrainingQuestions.length}

            </div>


            <h3 style="margin-bottom:20px;">
                ${questionText}
            </h3>


            <div id="retrainingOptions">

                ${options.map(function(option, index) {

                    return `

                        <button
                            type="button"
                            class="retraining-option"
                            data-index="${index}"
                            style="
                                display:block;
                                width:100%;
                                margin-bottom:10px;
                                padding:12px;
                                text-align:left;
                                cursor:pointer;
                            "
                        >

                            ${String.fromCharCode(65 + index)}.
                            ${option}

                        </button>

                    `;

                }).join("")}

            </div>


            <div
                id="retrainingStatus"
                style="
                    margin-top:15px;
                    font-weight:bold;
                "
            ></div>


            <button
                type="button"
                id="nextRetrainingButton"
                style="
                    display:none;
                    margin-top:15px;
                    padding:12px 20px;
                    cursor:pointer;
                "
            >

                ${currentRetrainingIndex ===
                  retrainingQuestions.length - 1

                    ? (
                        selectedLanguage === "hindi"
                            ? "पुनःप्रशिक्षण पूरा करें"
                            : "Finish Retraining"
                      )

                    : (
                        selectedLanguage === "hindi"
                            ? "अगला प्रश्न"
                            : "Next Question"
                      )}

            </button>

        </div>

    `;


    // ----------------------------------------------------------
    // OPTION CLICK HANDLERS
    // ----------------------------------------------------------

    const optionButtons =
        panel.querySelectorAll(".retraining-option");


    optionButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const selectedAnswer =
                    Number(
                        button.dataset.index
                    );


                handleRetrainingAnswer(
                    selectedAnswer
                );

            }
        );

    });


    // ----------------------------------------------------------
    // NEXT BUTTON
    // ----------------------------------------------------------

    const nextButton =
        document.getElementById(
            "nextRetrainingButton"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function() {

                currentRetrainingIndex++;

                showRetrainingQuestion();

            }
        );

    }


    // ----------------------------------------------------------
    // VOICE
    // ----------------------------------------------------------

    const optionsText =
        options
            .map(function(option, index) {

                return (
                    String.fromCharCode(65 + index) +
                    ". " +
                    option
                );

            })
            .join(". ");


    speakText(
        questionText + ". " + optionsText,
        selectedLanguage
    );

}


// ============================================================
// 24. HANDLE RETRAINING ANSWER
// ============================================================

function handleRetrainingAnswer(selectedAnswer) {

    const question =
        retrainingQuestions[currentRetrainingIndex];


    const isCorrect =
        selectedAnswer ===
        question.correctAnswer;


    const optionButtons =
        document.querySelectorAll(
            ".retraining-option"
        );


    // Disable all options.
    optionButtons.forEach(function(button) {

        button.disabled = true;
        button.style.cursor = "default";


        const index =
            Number(button.dataset.index);


        // Show correct answer.
        if (
            index ===
            question.correctAnswer
        ) {

            button.style.border =
                "3px solid green";

        }


        // Show user's wrong answer.
        if (
            index === selectedAnswer &&
            !isCorrect
        ) {

            button.style.border =
                "3px solid red";

        }

    });


    const status =
        document.getElementById(
            "retrainingStatus"
        );


    if (status) {

        status.innerText =
            isCorrect

                ? (
                    selectedLanguage === "hindi"
                        ? "✓ सही उत्तर!"
                        : "✓ Correct answer!"
                  )

                : (
                    selectedLanguage === "hindi"
                        ? "✗ गलत उत्तर।"
                        : "✗ Incorrect."
                  );

    }


    // Speak explanation.
    const explanation =
        getText(
            question.explanationEnglish,
            question.explanationHindi
        );


    speakText(
        explanation,
        selectedLanguage
    );


    // Show next button.
    const nextButton =
        document.getElementById(
            "nextRetrainingButton"
        );


    if (nextButton) {
        nextButton.style.display =
            "inline-block";
    }

}


// ============================================================
// 25. FINISH RETRAINING
// ============================================================

function finishRetraining() {

    const panel =
        document.getElementById(
            "retrainingPanel"
        );


    if (!panel) {
        return;
    }


    panel.innerHTML = `

        <div class="training-card"
             style="padding:20px; margin-top:20px;">

            <h2>
                ${selectedLanguage === "hindi"
                    ? "पुनःप्रशिक्षण पूरा हुआ"
                    : "Retraining Completed"}
            </h2>

            <p>
                ${selectedLanguage === "hindi"
                    ? "आपने अपने कमजोर क्षेत्रों से संबंधित प्रश्नों का दोबारा अभ्यास किया।"
                    : "You have completed practice on questions related to your weak areas."}
            </p>

            <button
                type="button"
                onclick="speakRetraining()"
                style="
                    padding:12px 20px;
                    cursor:pointer;
                "
            >

                ${selectedLanguage === "hindi"
                    ? "🔊 पुनःप्रशिक्षण सुनें"
                    : "🔊 Listen to Retraining"}

            </button>

        </div>

    `;


    const message =
        selectedLanguage === "hindi"

            ? "पुनःप्रशिक्षण पूरा हुआ। आपने अपने कमजोर क्षेत्रों से संबंधित प्रश्नों का दोबारा अभ्यास किया।"

            : "Retraining completed. You have practised the questions related to your weak areas.";


    setTimeout(function() {

        speakText(
            message,
            selectedLanguage
        );

    }, 500);

}

// ============================================================
// END OF APP.JS
// ============================================================                                                                                                                                                              
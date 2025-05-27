const quizQuestions = [{
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Berlin", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", isCorrect: true },
            { text: "Venus", isCorrect: false },
            { text: "Jupiter", isCorrect: false },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [

            { text: "Mark Twain", isCorrect: false },
            { text: "Charles Dickens", isCorrect: false },
            { text: "Jane Austen", isCorrect: false },
            { text: "William Shakespeare", isCorrect: true },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [

            { text: "Gold", isCorrect: false },
            { text: "Osmium", isCorrect: false },
            { text: "Oxygen", isCorrect: true },
            { text: "Zinc", isCorrect: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [

            { text: "Atlantic Ocean", isCorrect: false },
            { text: "Indian Ocean", isCorrect: false },
            { text: "Pacific Ocean", isCorrect: true },
            { text: "Arctic Ocean", isCorrect: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", isCorrect: false },
            { text: "Leonardo da Vinci", isCorrect: true },

            { text: "Vincent Van Gogh", isCorrect: false },
            { text: "Claude Monet", isCorrect: false }
        ]
    },
    {
        question: "Which country is famous for the Great Wall?",
        answers: [

            { text: "Japan", isCorrect: false },
            { text: "India", isCorrect: false },
            { text: "Korea", isCorrect: false },
            { text: "China", isCorrect: true },
        ]
    },
    {
        question: "How many continents are there?",
        answers: [

            { text: "5", isCorrect: false },
            { text: "7", isCorrect: true },
            { text: "6", isCorrect: false },
            { text: "8", isCorrect: false }
        ]
    },
    {
        question: "What is H2O commonly known as?",
        answers: [
            { text: "Water", isCorrect: true },
            { text: "Oxygen", isCorrect: false },
            { text: "Hydrogen", isCorrect: false },
            { text: "Salt", isCorrect: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [

            { text: "Tiger", isCorrect: false },
            { text: "Elephant", isCorrect: false },
            { text: "Leopard", isCorrect: false },
            { text: "Lion", isCorrect: true },
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Tokyo", isCorrect: true },
            { text: "Kyoto", isCorrect: false },
            { text: "Osaka", isCorrect: false },
            { text: "Hiroshima", isCorrect: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [

            { text: "Oxygen", isCorrect: false },
            { text: "Carbon Dioxide", isCorrect: true },
            { text: "Nitrogen", isCorrect: false },
            { text: "Hydrogen", isCorrect: false }
        ]
    },
    {
        question: "Who invented the light bulb?",
        answers: [

            { text: "Nikola Tesla", isCorrect: false },
            { text: "Albert Einstein", isCorrect: false },
            { text: "Isaac Newton", isCorrect: false },
            { text: "Thomas Edison", isCorrect: true },
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "2", isCorrect: true },
            { text: "1", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "5", isCorrect: false }
        ]
    },
    {
        question: "In which country are the Pyramids of Giza?",
        answers: [
            { text: "Egypt", isCorrect: true },
            { text: "Mexico", isCorrect: false },
            { text: "Peru", isCorrect: false },
            { text: "Greece", isCorrect: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "100°C", isCorrect: true },
            { text: "90°C", isCorrect: false },
            { text: "80°C", isCorrect: false },
            { text: "70°C", isCorrect: false }
        ]
    },
    {
        question: "Which sport uses a racket, ball, and net?",
        answers: [

            { text: "Football", isCorrect: false },
            { text: "Tennis", isCorrect: true },
            { text: "Basketball", isCorrect: false },
            { text: "Golf", isCorrect: false }
        ]
    },
    {
        question: "Which language has the most native speakers?",
        answers: [

            { text: "English", isCorrect: false },
            { text: "Spanish", isCorrect: false },
            { text: "Hindi", isCorrect: false },
            { text: "Mandarin Chinese", isCorrect: true }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", isCorrect: true },
            { text: "Ag", isCorrect: false },
            { text: "Fe", isCorrect: false },
            { text: "Pb", isCorrect: false }
        ]
    },
    {
        question: "Which organ pumps blood through the body?",
        answers: [

            { text: "Liver", isCorrect: false },
            { text: "Heart", isCorrect: true },
            { text: "Lungs", isCorrect: false },
            { text: "Kidneys", isCorrect: false }
        ]
    }
];
//---------------------------------------------
const quizContainer = document.getElementById("quizContainer");
const startQuizBtn = document.getElementById("btn-start-quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEL = document.querySelector(".points")
const timerEl = document.getElementById("timer");
const closeBtn = document.querySelector(".closeBtn")
const finaleContainer = document.querySelector("#Finale");
const finaleScoreShow = document.querySelector("#finaleScoreShow");






let currentQuestionIndex = 0;
let timer = 0;
let score = 0;
let finaleScore = 0;
let isRevealResult = false;
let disable = false;
let disableStartBtn = false;
let isOpen = false;

function showFinal() {
    isOpen = true
    finaleContainer.style.display = `${isOpen ? "flex" : "none"}`

}


function closeFunc() {

    isOpen = false
    finaleContainer.style.display = `${isOpen ? "flex" : "none"}`
    window.location.reload()
    console.log("CLOSED")
}

closeBtn.addEventListener("click", closeFunc)


function IncrementScore(secondsLeft) {
    timer = parseInt(secondsLeft) | 0
    let scoreLogic = timer * 100
    score += scoreLogic
    scoreEL.innerHTML = score
    finaleScoreShow.innerHTML = `Your finale Total Score is <strong class="finalPoints">${score} / 20000</strong> points`
}

const startQuiz = () => {

    disableStartBtn = true
    questionEl.innerHTML = quizQuestions[currentQuestionIndex].question;
    optionsEl.innerHTML = "";
    timerEl.style.display = "block"

    timer = 11

    const myInterval = setInterval(() => {
        timer = timer > 0 ? timer - 1 : 0
        timerEl.innerHTML = timer
    }, 1000)


    const answers = quizQuestions[currentQuestionIndex].answers
    answers.forEach((answer, index) => {



        const optionBtn = document.createElement("div");
        const optionRadio = document.createElement("input");
        optionRadio.type = "radio"
        optionRadio.name = "answer"
        optionRadio.value = answer.text
        optionRadio.classList = "answerRadio"
        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = answer.text
        optionLabel.name = answer.text
        optionLabel.innerText = answer.text

        let isCorrectReveal = ""
        isCorrectReveal.innerHTML = answer.isCorrect ? "yes" : "no"

        optionBtn.setAttribute("data-index", index);
        optionBtn.classList = "answerBtn";
        optionBtn.appendChild(optionLabel)
        optionBtn.appendChild(optionRadio)

        optionsEl.appendChild(optionBtn)

        startQuizBtn.disabled = disableStartBtn;
        startQuizBtn.style.pointerEvents = "none";
        startQuizBtn.style.opacity = "0.5";

        //----------------------------------------------

        optionBtn.addEventListener("click", () => {
            disable = true

            const quizContainer = document.getElementById("quizContainer");

            quizContainer.disabled = disable;
            quizContainer.style.pointerEvents = "none";
            quizContainer.style.opacity = "0.7";

            const showCorrectPara = document.querySelector(".correct-answer");
            isRevealResult = true;
            const correctAnswer = answers.find(answer => answer.isCorrect)
            const choosenAnswer = answer.isCorrect
                /*function verifyAnswer() {
                }*/
            if (choosenAnswer === correctAnswer.isCorrect) {
                optionBtn.style.background = "green";
                showCorrectPara.style.background = "green";
                showCorrectPara.style.display = `${isRevealResult ? "flex" : "none" }`;
                showCorrectPara.innerText = ` you are correct`;
                nextBtn.style.display = `${isRevealResult ? "block" : "none" }`;
                clearInterval(myInterval)
                timerEl.style.animation = "none"
                IncrementScore(timer)




            } else {
                optionBtn.style.background = "red";
                showCorrectPara.style.background = "red";
                showCorrectPara.style.display = `${isRevealResult ? "flex" : "none" }`;
                showCorrectPara.innerHTML = ` <p> you are wrong the correct answer is " <strong class="bolder">${correctAnswer.text}</strong> " </p> `
                nextBtn.style.display = `${isRevealResult ? "block" : "none" }`;
                clearInterval(myInterval)
                timerEl.style.animation = "none"
            }

            console.log({ correctAnswerIs: correctAnswer })
            console.log({ choosenAnswerIs: choosenAnswer })
        })




    })

    console.info("quizQuestions")

}

const nextQuestion = () => {
    timer = 0
    const quizContainer = document.getElementById("quizContainer");
    const showCorrectPara = document.querySelector(".correct-answer");
    currentQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < quizQuestions.length) {

        startQuiz();
        nextBtn.style.display = "none";
        //----------Reset the UI
        quizContainer.disabled = false;
        quizContainer.style.pointerEvents = "";
        quizContainer.style.opacity = "";
        showCorrectPara.innerHTML = ""
        showCorrectPara.style.display = "none";
    } else {
        showFinal()
        console.log("ELYNAH")
    }



    quizQuestions[currentQuestionIndex];
}

//-----------
startQuizBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQuestion)
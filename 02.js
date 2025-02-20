const questions =[
    {
        question:" What is the pH value of the human body?",
        answers:[
            {text:"9.2 to 9.8", correct:false},
            {text:"7.0 to 7.8", correct:true},
            {text:"6.1 to 6.3", correct:false},
            {text:"7.8 to 8.0", correct:false}
        ]
    },
    {
        question:" Which of the following are called 'Key Industrial animals'?",
        answers:[
            {text:"Producer", correct:false},
            {text:"Tertiary Consumers", correct:false},
            {text:"Primary Consumer", correct:true},
            {text:"None of these", correct:false}
        ]
    },
    {
        question:"Elections to panchayats in state are regulated by",
        answers:[
            {text:"Gram Panchayat", correct:false},
            {text:"Nagar Nigam", correct:false},
            {text:"Election Commission of India", correct:false},
            {text:"State Election Commission", correct:true}
        ]
    },
    {
        question:" Which of the following Himalayan regions is called 'Shivalik's'?",
        answers:[
            {text:"Upper Himalayas", correct:false},
            {text:"Lower Himalayas", correct:true},
            {text:"Outer Himalayas", correct:false},
            {text:"Inner Himalayas", correct:false}
        ]
    }
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo  = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+"."+currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        //create buttons
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        //assign class to each and every button
        button.classList.add("btn");
        //append each button at the end
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
            // console.log(button.dataset.correct);
        }    
        button.addEventListener("click",(e)=>{
            const selectedBtn = e.target;
            // isCorrect hold boolean value true or false
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            }else {
                selectedBtn.classList.add("inCorrect");
            }

            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct ==="true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display="block";
        })
    });
}

function resetState() {
    nextButton.computedStyleMap.display="none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length) {
        handleButton();
    }else {
        startQuiz();
    }
})

startQuiz();


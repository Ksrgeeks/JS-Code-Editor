// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const ans = document.getElementById("ans");
const desc = document.getElementById("desc");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
//const choiceA = document.getElementById("A");
//const choiceB = document.getElementById("B");
//const choiceC = document.getElementById("C");
//const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");


ans.style.backgroundColor = "green";
ans.style.color= "white";
desc.style.color= "red";

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    currentQue=runningQuestion+1 ;
    question.innerHTML = "<p><br>"+currentQue+" . "+q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    //choiceA.innerHTML = q.choiceA;
    //choiceB.innerHTML = q.choiceB;
    //choiceC.innerHTML = q.choiceC;
    //choiceD.innerHTML = q.choiceD;
ans.innerHTML= "<center><b>"+q.correct+"</b></center>";
desc.innerHTML= "<center><b>"+q.discription+"</b></center>";

var msg = new SpeechSynthesisUtterance();
//msg.volume = 1; // From 0 to 1
//msg.rate = 0.8; // From 0.1 to 10
//msg.pitch = 1.5; // From 0 to 2
msg.text = ans.innerHTML;
speechSynthesis.speak(msg);   

var msg1 = new SpeechSynthesisUtterance();
//msg1.volume = 1; // From 0 to 1
//msg1.rate = 0.8; // From 0.1 to 10
//msg1.pitch = 1.5; // From 0 to 2
msg1.text = desc.innerHTML;
speechSynthesis.speak(msg1);  
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
	
    quiz.style.display = "block";
	
    renderProgress();
	
    renderCounter();
	
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
	
}

// render progress

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<p id="+ qIndex +"></p>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
           // scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    answerIsWrong();
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        //scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    
}

// answer is Wrong
function answerIsWrong(){
   // document.getElementById(runningQuestion).innerHTML = "Answer :"+questions[runningQuestion].correct;
	//ans.innerHTML = "<b>"+questions[runningQuestion].correct+"</b>";
   
}














const start=document.querySelector('.start')
const quiz=document.querySelector('.quiz');
const quizQuestion=document.querySelector('.question');
let answers=document.querySelectorAll('.answers');
let points=0;

class question{
    constructor(question,options,correct){
        this.question=question;
        this.options=options;
        this.correct=correct;
    }
    check(option){
        if(option==this.correct){
            return 1;
        }
        else{
            return 0;
        }
    }
}

let question1 = new question("Who didn't participate in WW1?",['Turkey','Poland','Luxembourg','Ireland'],'Ireland');
let question2 = new question("What was the largest battle in human history?",['Bulge','Stalingrad','Britain','Anzio'],'Stalingrad');
let question3 = new question("Who liberated Berlin in 1945?",['USA','UK','France','USSR'],'USSR');
let question4 = new question("Who was not a part of the Soviet Union?",['Kazakhstan','Georgia','Estonia','Bulgaria'],'Bulgaria');
let question5 = new question("Who started world war 1?",['Serbia','USA','Germany','Russia'],'Serbia');

let questions=[
  question1,question2,question3,question4,question5  
]

function generalCheck(option,answer) {
    console.log(questions[i].check(option));
    if (questions[i].check(option)==1) {
        answer.classList.toggle('answers');
        answer.classList.toggle('correct');
        points++;
        i--;
        next();
        
    }
    else{
        answer.classList.toggle('answers');
        answer.classList.toggle('incorrect');
    }
}

let i=4;

function next() {
    quizQuestion.querySelector('h1').innerHTML=questions[i].question;
    for (let j = 0; i < answers.length; j++) {
        answers[j].querySelector('h1').innerHTML=questions[i].options[j];
    };
    startt();
}

function startt() {

    answers.forEach(answer => {
        answer.className='answers';
        answer.addEventListener('click',()=>{
            let h1opt=answer.querySelector('h1').innerHTML;
            generalCheck(h1opt,answer);
            
        });
    });
}

start.addEventListener('click',(e)=>{
    e.preventDefault();
    start.classList.toggle('clicked');
    start.style.display='none';
    quiz.style.display='block';
    startt();
});
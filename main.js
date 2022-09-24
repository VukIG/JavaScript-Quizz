const start=document.querySelector('.start')
const quiz=document.querySelector('.quiz');

class question{
    constructor(question,options,correct){
        this.question=question;
        this.options=options;
        this.correct=correct;
    }
    check(option){
        if(option==this.options[this.correct]){
            option.classList.toggle('correct');
        }
        else{
            option.classList.toggle('incorrect');
        }
    }
}

question1 = new question("Who didn't participate in WW1?",['Turkey','Poland','Luxembourg','Ireland'],'Ireland');
question2 = new question("What was the largest battle in human history?",['Bulge','Stalingrad','Britain','Anzio'],'Stalingrad');
question3 = new question("Who liberated Berlin in 1945?",['USA','UK','France','USSR'],'USSR');
question4 = new question("Who was not a part of the Soviet Union?",['Kazakhstan','Georgia','Estonia','Bulgaria'],'Bulgaria');

let questions=[
  question1,question2,question3,question4  
]

function start() {
    start.style.display='none';
    quiz.style.display='block';
    let answers=document.querySelectorAll('.answers');
        answers.forEach(answer => {
        answer.addEventListener('click',()=>{
            
        });
    });
}

start.addEventListener('click',(e)=>{
    e.preventDefault();
    start.classList.toggle('clicked');
    setInterval(start(),400);
});
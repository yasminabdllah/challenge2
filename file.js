
let questioncontainer=document.getElementById("questioncontainer");


function tOggle(i) {
    document.getElementById(`answer${i}`).classList.toggle("answer");
};



let questions=[
    {question:"do you accept all major credit cards?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",

},
{question:"do you accept all major credit cards?",
answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",

},
{question:"do you accept all major credit cards?",
answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",

}
]

function fillquestions(){
    for(let i=0; i<questions.length;i++){
        questioncontainer.innerHTML+=`
    <div class="q-div">
            <div class="question">
                <p>${questions[i].question}</p>
                <button onclick="tOggle(${i})" class="toggle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                </button>
        
            </div>
            <div id="answer${i}" class="toggleanswer" >
                <p>${questions[i].answer}</p>
        
            </div>
        </div>
    `
        
    };
};



fillquestions();
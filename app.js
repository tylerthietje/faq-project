// traversing the dom

// selecting all the buttons
// const btns = document.querySelectorAll('.question-btn');

//     // loop over them and check that the parent is present by doing:
//     // click event listener with callback function with argument e,
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(e) {
//             // create variable question with e.currentTarget.parentElement.parentElement
//             // this selects the top parent element of "question"
//             const question = e.currentTarget.parentElement.parentElement;
//             question.classList.toggle('show-text');            
//         });
//     }); 
    
        


// USING SELECTORS INSIDE THE ELEMENT

// select all the questions by class ('.question');
const questions = document.querySelectorAll('.question');
// forEach loop over questions passing in arg question
questions.forEach(function(question) {
    // store question.querySelectorAll('.question-btn) in variable btn to select all buttons
    const btn = question.querySelector('.question-btn');
    // add el to btn and toggle classList on the btn variable
    btn.addEventListener('click', function () {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });    
        question.classList.toggle("show-text");
    });
});

    
     


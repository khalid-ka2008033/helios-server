
//import models.py from helios
// import { models } from '../../helios/helios_auth/models.py';


document.addEventListener('DOMContentLoaded', function () {
    // print(document.title)
    console.log(window.location.pathname);
    const election_form = document.querySelector('.pretty');
    

    if (election_form){
        election_form.classList.add('what-and-why');
        // election_questions.classList.add('what-and-why');
    }
    
    
    var parentDiv = document.getElementById("question_container");
    if (parentDiv != null){
        var childrenDivs = parentDiv.querySelectorAll("div");
         
        for (var i = 0; i < childrenDivs.length; i++) {
            var childDiv = childrenDivs[i];
            if(childDiv.classList.contains('question_card')){
                childDiv.classList.add('what-and-why');
            }
        
            console.log(childDiv);
        }
    }
    try{
    const add_question_div = document.querySelector('.Add_question');
        add_question_div.classList.add('what-and-why');
    }catch{

    }
    
    if(window.location.pathname == '/'){
        // js logic for home page
        
        
    }
    else if(window.location.pathname == '/faq'){
            const question_container = document.querySelectorAll('.question-container');
            const expanders = document.querySelectorAll('.expander-text');
            const answers = document.querySelectorAll('.answer');
            question_container.forEach((q,index) => {
                q.addEventListener('click', () => {
                console.log(answers[index].style.height);
                if(answers[index].style.height == '0px'){
                    // answers[index].style.height = '100%';
                    answers[index].style.height = answers[index].scrollHeight + 'px';
                    // answer.style.display= 'block';
                    expanders[index].style.transform = "rotate(180deg)";
                }else{
                    answers[index].style.height = '0px';
                    // answer.style.transition = '0.3s ease-in-out';
                    expanders[index].style.transform = "none";
                    expanders[index].style.transition = '0.2s ease-in-out';
                }
            });
        });
    }
    else if(window.location.pathname == '/helios/elections/new'){
        // js logic for about page
        
        
        
       
        // election_form.classList.remove('pretty');
    }
    // else if(window.location.pathname == '/helios/elections/(?P<election_uuid>[^/]+)/edit'){
    //     // js logic for about page
    //     alert('edit page');
    //     const election_form = document.querySelector('.pretty');
    //     election_form.classList.add('what-and-why');
    //     // election_form.classList.remove('pretty');
    // }

});
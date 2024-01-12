const sections = document.querySelectorAll('.section');

//buttons parent class
const sectionButtons = document.querySelectorAll('.controls');

//individual buttons
const sectionButton = document.querySelectorAll('.control');

//html body
const allSections = document.querySelector('.main-content')

function pageTransition(){
    //manage button active class transition
    for(let i = 0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += 'active-button';
        } )
    }

    //sections to show with active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectionButtons.forEach((button) => {
                button.classList.remove('active');
            })


            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Light/Dark Mode
    const themeButton = document.querySelector('.theme-button');
    themeButton.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pageTransition();
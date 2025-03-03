const themeColors = document.querySelector('.theme-colors');
const changeTheme = document.querySelector('.change-theme');

function displayThemes(){
    if(themeColors.style.display === 'none'){
        themeColors.style.display='flex';
    }else{
        themeColors.style.display='none';
    }
}

changeTheme.addEventListener('click',displayThemes);

document.querySelectorAll(".theme").forEach(box=>{
    box.addEventListener('click',(event)=>{
        const backgroundColor = window.getComputedStyle(event.target).backgroundColor;
        document.documentElement.style.setProperty('--theme-color',`${backgroundColor}`);
    })
})

const icon = document.querySelector('.dark-light');
icon.addEventListener('click',toDarkMode);

function toDarkMode(){
        document.body.classList.toggle("dark-theme");
}

// change main page with display //

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');

const lis = document.querySelectorAll('.navigation nav ul li');
let currentSectionToStyle ='home';

const containers = Array.from(document.querySelectorAll('.container'));

lis.forEach(section => {
    section.addEventListener('click', (event) => {
        containers.forEach(container => {
            container.style.display = 'none';
        });
        lis.forEach(li => li.classList.remove('clicked'));

        const currentSection = event.target.className;
        currentSectionToStyle=currentSection;
        const currentDisplay = event.target.id;

        const element = containers.find(container => 
            container.classList.contains(currentSection)
        );

        if (element) {
            element.style.display = currentDisplay;
        }
        document.querySelector(`.${currentSectionToStyle}`).classList.add('clicked');
    });
});


function toAboutSection(){
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.querySelector(`.container.about`).style.display ='block';
    lis.forEach(li => li.classList.remove('clicked'));
    about.classList.add('clicked');
}

function toContactSection(){
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.querySelector(`.container.contact`).style.display ='flex';
    lis.forEach(li => li.classList.remove('clicked'));
    contact.classList.add('clicked');
}


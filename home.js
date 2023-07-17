document.addEventListener("DOMContentLoaded", onDocumentLoad); //страница полностью загружена


let switchHome = document.getElementById('switchHome');
let switchReviews = document.getElementById('switchReviews');
let switchParthers = document.getElementById('switchParthers');
let switchContacts = document.getElementById('switchContacts');
let switchCalculator = document.getElementById('switchCalculator');

let contentHome = document.getElementById('contentHome');
let contentReviews = document.getElementById('contentReviews');
let contentPartners = document.getElementById('contentPartners');
let contentContacts = document.getElementById('contentContacts');
let contentCalculators = document.getElementById('contentCalculators');

let iconThemeSun = document.getElementById('iconThemeSun');  

let iconThemeMoon = document.getElementById('iconThemeMoon');


function onDocumentLoad() {
    
    iconThemeSun.addEventListener('click', switchTheme);         
    iconThemeMoon.addEventListener('click', switchTheme);  
   
    switchHome.addEventListener('click', switchContent);
    switchReviews.addEventListener('click', switchContent);
    switchParthers.addEventListener('click', switchContent);
    switchContacts.addEventListener('click', switchContent);
    switchCalculator.addEventListener('click', switchContent);
}


function switchTheme() {    
    if (document.body.hasAttribute("medusa")) {
        document.body.removeAttribute('medusa');
        document.body.setAttribute('light', '');
    } else {
        document.body.removeAttribute('light');
        document.body.setAttribute('medusa', '');
    }
}

function switchContent(event) {
    console.log(event.target);
    let menu = event.target.closest('[menu]');
    if (menu.id == 'switchHome') {
        contentHome.removeAttribute('hide');
        contentReviews.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentCalculators.setAttribute('hide', '');
        menu.classList.add('active');
        switchContacts.classList.remove('active');
        switchParthers.classList.remove('active');
        switchReviews.classList.remove('active');
        switchCalculator.classList.remove('active');
    } else if (menu.id == 'switchReviews') {
        contentReviews.removeAttribute('hide');
        contentPartners.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentHome.setAttribute('hide', '');
        contentCalculators.setAttribute('hide', '');
        menu.classList.add('active');
        switchContacts.classList.remove('active');
        switchParthers.classList.remove('active');
        switchHome.classList.remove('active');
        switchCalculator.classList.remove('active');
        
    } else if (menu.id == 'switchParthers') {
        contentPartners.removeAttribute('hide');
        contentHome.setAttribute('hide', '');
        contentReviews.setAttribute('hide', '');
        contentContacts.setAttribute('hide', '');
        contentCalculators.setAttribute('hide', '');
        menu.classList.add('active');
        switchContacts.classList.remove('active');
        switchReviews.classList.remove('active');
        switchHome.classList.remove('active');
        switchCalculator.classList.remove('active');
    } else if (menu.id == 'switchContacts') {
        contentContacts.removeAttribute('hide');
        contentHome.setAttribute('hide', '');
        contentReviews.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        contentCalculators.setAttribute('hide', '');
        menu.classList.add('active');
        switchParthers.classList.remove('active');
        switchReviews.classList.remove('active');
        switchHome.classList.remove('active');
        switchCalculator.classList.remove('active');
    } else if (menu.id == 'switchCalculator') {
        contentCalculators.removeAttribute('hide');
        contentContacts.setAttribute('hide', '');
        contentHome.setAttribute('hide', '');
        contentReviews.setAttribute('hide', '');
        contentPartners.setAttribute('hide', '');
        menu.classList.add('active');
        switchParthers.classList.remove('active');
        switchReviews.classList.remove('active');
        switchHome.classList.remove('active');
        switchContacts.classList.remove('active');
    }
}

//--------------------Calculator------------//



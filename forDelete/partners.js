

document.addEventListener("DOMContentLoaded", onDocumentLoad); //страница полностью загружена
document.addEventListener("DOMContentLoaded", onDocumentLoadMoon); //страница полностью загружена




function onDocumentLoad() {
    let iconThemeSun = document.getElementById('iconThemeSun');  
    iconThemeSun.addEventListener('click', switchTheme);   
}
function onDocumentLoadMoon() { 
    let iconThemeMoon = document.getElementById('iconThemeMoon');    
    iconThemeMoon.addEventListener('click', switchTheme);  
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



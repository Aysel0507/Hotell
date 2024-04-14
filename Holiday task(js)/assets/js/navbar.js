const header=document.querySelector('header');
let isScrolled=false;
window.addEventListener('scroll',function() {
    if (!isScrolled && window.scrollY>100) { 
        header.style.backgroundColor='#00917c'; 
        isScrolled=true;
    } 
    else if (isScrolled && window.scrollY<=100) {
        header.style.backgroundColor='transparent'; 
        isScrolled=false; 
    }
});

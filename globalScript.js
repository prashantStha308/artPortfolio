// For nav-link weight transtion

document.addEventListener('DOMContentLoaded',function(){
    const nav = document.getElementsByClassName('nav-link');

    for(let i = 0; i < nav.length ; i++){
        nav[i].addEventListener("mouseenter",function(){
            this.classList.add('be-bold')
        });

        nav[i].addEventListener('mouseleave',function(){
            this.classList.remove('be-bold').add('be-normal');
        })
    }
});
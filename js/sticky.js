const header = document.querySelector("#header");
const sticky = header.offsetTop;
console.log(sticky);
window.addEventListener('scroll', () => {
    if(window.scrollY > sticky){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});
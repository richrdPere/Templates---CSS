document.addEventListener("DOMContentLoaded", event => {

    let button = document.querySelector(".layout__menuToggle");
    let icon_bars = document.querySelector(".layout__menuToggle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menuToggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", event=>{
        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        } else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
    });   

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
    });
    
});

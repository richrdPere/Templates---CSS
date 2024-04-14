document.addEventListener("DOMContentLoaded", event => {

    setTimeout(() => {
        document.querySelector("#IdLoadIframeMap").innerHTML = `
        <iframe 
            class="contact__iframe" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5485.666722402647!2d-71.98421106911152!3d-13.538527546567762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5c6a3665363%3A0x2301b2df25ed99f7!2sParque%20Los%20%C3%81ngeles!5e0!3m2!1ses-419!2spe!4v1712929944112!5m2!1ses-419!2spe">
        </iframe>`;
    }, 500)

    
});

/* Quando o usuário scrolar para baixo, a página ativa o blur no navbar */
window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
            console.log("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
});


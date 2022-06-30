
/*

Função de Scroll visivel apartir de um determinado ponto pelo curso RocketSeat

//unica função da function onScroll é gerênciar os diversos srolls da página
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

//unica função de function showNavOnScroll mostrar o navigation ao fazer scroll
function showNavOnScroll(){

}

//unica função de function showBackToTopButtonOnScroll é mostrar o botão backtotp ao fazer scroll
function showBackToTopButtonOnScroll() {
    if (scrollY > 0) {
        showBackToTopButton.classList.add('show')
    } else {
        showBackToTopButton.classList.remove('show')
    }

}
// video 04 aos 41:54 min
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#backToTop
`)

*/ 
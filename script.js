function toggleEstado() {
    let card3 = document.getElementById('card3')
    let card4 = document.getElementById('card4')
    let card5 = document.getElementById('card5')
    let card6 = document.getElementById('card6')

    let verMaisVerMenos = document.getElementById('verMaisVerMenos')

    card3.classList.toggle('hide')
    card4.classList.toggle('hide')
    card5.classList.toggle('hide')
    card6.classList.toggle('hide')

    if (card3.classList == 'hide') {
        verMaisVerMenos.textContent = 'Ver mais'
    } else {
        verMaisVerMenos.textContent = 'Ver menos'
    }
}


function toggleMode() {
    let mode = document.body
    mode.classList.toggle('light-mode')

    if (mode.classList == "light-mode") {
        document.getElementById('imgToggle').src = "./assets/dark.png"
    } else {
        document.getElementById('imgToggle').src = "./assets/light.webp"
    }
}
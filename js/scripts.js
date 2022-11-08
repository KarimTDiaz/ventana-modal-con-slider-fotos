const gallery = document.getElementById('gallery')
const modalImage = document.getElementById('modal-image')
const modal = document.getElementById('modal')
const crossModal = document.getElementById('icon-cross')
const arrowRightElement = document.getElementById('icon__arrow-right')
const arrowleftElement = document.getElementById('icon__arrow-left')

const allImagesSrc = Array.from(document.querySelectorAll('.image'))

let contador = 0;

gallery.addEventListener('click', (event) => {
    console.log(event.target.src)
    modalImage.src = (event.target.src)
    modal.classList.add('modal--show')
    contador = allImagesSrc.indexOf(event.target)

})

crossModal.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

const cambiarSrcRight = () => {
    if (contador >= allImagesSrc.length - 1) {
        contador = 0;
    } else {
        contador = contador + 1;
    }


    modalImage.classList.add('modal__image--fade-out');
}

const cambiarSrcLeft = () => {
    if (contador <= 0) {
        contador = allImagesSrc.length - 1
    } else {
        contador = contador - 1
    }

    modalImage.classList.add('modal__image--fade-out');

}

modalImage.addEventListener('transitionend', () => {
    modalImage.classList.remove('modal__image--fade-out')
    modalImage.src = allImagesSrc[contador].src
    modalImage.classList.add('modal__image--fade-in')
})
//transitionend

modalImage.src = allImagesSrc[contador].src

arrowRightElement.addEventListener('click', cambiarSrcRight)
arrowleftElement.addEventListener('click', cambiarSrcLeft)



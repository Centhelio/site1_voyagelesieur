const btnPlus = document.querySelector(`.js-plus`);
const contTransport = document.querySelector(`.conteneur-transport`);


btnPlus.addEventListener(`click`, ouvreferme);


function ouvreferme() {
    contTransport.classList.toggle(`invisible`);

}

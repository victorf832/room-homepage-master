window.addEventListener('load', () => {
let botonRetroceder = document.querySelector('#retroceder');
let botonAvanzar = document.querySelector('#avanzar');
let controles = document.querySelector('.controles');
let imagen = document.querySelector('.img1');
let imagen2 = document.querySelector('.img2');
let imagen3 = document.querySelector('.img3');
let caja1 = document.querySelector('.caja1');
let caja2 = document.querySelector('.caja2');
let caja3 = document.querySelector('.caja3');
let abrir = document.querySelector('.abrir');
let cerrar = document.querySelector('.cerrar');
let menu = document.querySelector('.menu-desple');
let fondo = document.querySelector('.menu-hamburguesa');

let posicion = 0;
function cambiarimagen() {
    if (posicion == 0) {
        imagen.style.display = "block";
        imagen2.style.display = "none";
        imagen3.style.display = "none";
        caja1.style.display = "block";
        caja2.style.display = "none";
        caja3.style.display = "none";
    }
    if (posicion == 1) {
        imagen.style.display = "none";
        imagen2.style.display = "block";
        imagen3.style.display = "none";
        caja1.style.display = "none";
        caja2.style.display = "block";
        caja3.style.display = "none";
    }
    if (posicion == 2) {
        imagen.style.display = "none";
        imagen2.style.display = "none";
        imagen3.style.display = "block";
        caja1.style.display = "none";
        caja2.style.display = "none";
        caja3.style.display = "block";
    }
}
cambiarimagen();
botonAvanzar.addEventListener('click', function () {
    posicion++;
    if (posicion > 2) {
        posicion = 0;
    }
    cambiarimagen();
});

botonRetroceder.addEventListener('click', function () {
    posicion--;
    if (posicion < 0) {
        posicion = 2;
    }
    cambiarimagen();
});
function desapa(){
    
}
abrir.addEventListener('click',function(){
    this.classList.toggle('active');
    cerrar.classList.toggle('active');
    menu.classList.toggle('active');
    fondo.classList.toggle('active');
    controles.classList.toggle('active');
})
cerrar.addEventListener('click',function(){
    this.classList.toggle('active');
    abrir.classList.toggle('active');
    menu.classList.toggle('active');
    fondo.classList.toggle('active');
    controles.classList.toggle('active');
});
});
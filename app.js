/* Variables */

/* Navbar */
const hamburger = document.querySelector(".hamburguer");
const navBar = document.querySelector(".navBar");
const menu = document.querySelector(".menu");
const imgHamburger = document.querySelector(".img");
/* Color Flipper */
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");
const box13 = document.querySelector(".box13");
const box14 = document.querySelector(".box14");
const box15 = document.querySelector(".box15");
const box16 = document.querySelector(".box16");
const buttonPush = document.querySelector(".box17");
/* Counter */
const counterDiv = document.querySelector(".counter");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
/* Modal */
const modal = document.getElementById("myModal");
const btn = document.querySelector(".buttonModal");
const span = document.getElementsByClassName("close")[0];















/* Navbar */
hamburger.addEventListener('click', () => {
    navBar.classList.toggle("slider");
    imgHamburger.classList.toggle("effect");
    menu.classList.toggle("displayBlock");
});


/* Color Flipper */

const colors = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500", "#9381ff", "#fdf0d5", "#00a8e8", "#00296b"];

const getRandomNumber = (number) => {
    let random = Math.random()*9 + number;
    let randomNumber = Math.floor(random);

    return randomNumber;
}

buttonPush.addEventListener("click", () =>{
    box1.style.background=colors[getRandomNumber(1)];
    box2.style.background=colors[getRandomNumber(0)];
    box3.style.background=colors[getRandomNumber(1)];
    box4.style.background=colors[getRandomNumber(0)];

    box5.style.background=colors[getRandomNumber(0)];
    box6.style.background=colors[getRandomNumber(1)];
    box7.style.background=colors[getRandomNumber(0)];
    box8.style.background=colors[getRandomNumber(1)];

    box9.style.background=colors[getRandomNumber(1)];
    box10.style.background=colors[getRandomNumber(0)];
    box11.style.background=colors[getRandomNumber(1)];
    box12.style.background=colors[getRandomNumber(0)];

    box13.style.background=colors[getRandomNumber(1)];
    box14.style.background=colors[getRandomNumber(0)];
    box15.style.background=colors[getRandomNumber(1)];
    box16.style.background=colors[getRandomNumber(0)];
})


/* Counter */

let counter = 0;

const sumar = plus.addEventListener("click", () => {
    counter++;
    counterDiv.innerHTML = counter;

    if (counter > 0) {
        counterDiv.style.color = "#003049";
    } else if (counter < 0) {
        counterDiv.style.color = "#780000";
    } else {
        counterDiv.style.color = "#ccc";
    }
})

const restar = minus.addEventListener("click", () => {
    counter--;
    counterDiv.innerHTML = counter;

    if (counter > 0) {
        counterDiv.style.color = "#003049";
    } else if (counter < 0) {
        counterDiv.style.color = "#780000";
    } else {
        counterDiv.style.color = "#ccc";
    }
})

counterDiv.innerHTML = counter ;


//Modal
btn.addEventListener("click", () =>{
    modal.style.display = "block";
})

span.addEventListener("click", () =>{
    modal.style.display = "none";
})

/* Timer */

//Fecha Actual
const fechaActual = document.querySelector("#fecha-actual");
const fecha = new Date().toLocaleDateString();
fechaActual.innerHTML = fecha;

//Hora Actual
var timer = setInterval(() => {
    const hora = new Date().toLocaleTimeString();
    document.getElementById("hora-actual").innerHTML = hora;
  }, 1000);

//Cronometro
var startTime = new Date().getTime();
var timer = setInterval(() => {
  var currentTime = new Date().getTime();
  var elapsedTime = (currentTime - startTime) / 1000;
  cronometro = document.getElementById("cronometro");
  cronometro.innerHTML = Math.floor(elapsedTime) + " segundos";
}, 1000);

//Temporizador
const fechaCumpleaños = new Date('2023-11-22');

setInterval( () =>{
    const temporizador = document.querySelector("#temporizador");

    const ahora = new Date();
    const operacion = fechaCumpleaños.getTime() - ahora.getTime();

    const dias = Math.floor(operacion / (1000 * 60 * 60 * 24));
    const horas = Math.floor((operacion % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((operacion % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((operacion % (1000 * 60)) / 1000);

    temporizador.innerHTML = ` ${dias}:${horas}:${minutos}:${segundos} `

    
}, 1000 );





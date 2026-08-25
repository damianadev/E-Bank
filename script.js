//get Username
const username = prompt("To login, you need to type your username!");
const currentUser= document.querySelector('#currentUser').textContent = username


//get IBAN
let twoDigitIban = Math.floor(Math.random() * 90) + 10;
let fourDigitIban = Math.floor(Math.random() * 9000) + 1000; 
const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
const currentIban = document.querySelector('#currentIban').textContent = fullIban;

//get Balance
let balance = 100.00;
const currentBalance = document.querySelector('#currentBalance').textContent = balance;


//Send money

const openSendWndw = document.querySelector('#openSendWndw');
const sendWndw = document.querySelector('.sendWndw');

let display = 0;

openSendWndw.addEventListener("click", function () {
    if(display === 1){
        sendWndw.style.display = "block" 
        display = 0;
    } else {
        sendWndw.style.display = "none";
        display = 1;
    }
})

//Request money 

const openRequestWndw = document.querySelector('#openRequestWndw');
const requestWndw = document.querySelector('.requestWndw');

openRequestWndw.addEventListener("click", function() {
    if(display === 1){
        requestWndw.style.display = "block" 
        display = 0;
    } else {
        requestWndw.style.display = "none";
        display = 1;
    }
})

//...

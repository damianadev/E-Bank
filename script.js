//get/save Username
const userInput = document.querySelector('#userInput');
const saveUserBtn = document.querySelector('#saveUserBtn');
const userOutput = document.querySelector('#userOutput');
const key = "user";

function saveUser(){
    const currentUser = userInput.value.toUpperCase();
    if (!currentUser) return;

    localStorage.setItem(key, currentUser);
    userOutput.textContent = localStorage.getItem(key);

    console.log(currentUser);
};

saveUserBtn.addEventListener('click', saveUser);
userOutput.textContent = localStorage.getItem(key);


//get IBAN
let twoDigitIban = Math.floor(Math.random() * 90) + 10;
let fourDigitIban = Math.floor(Math.random() * 9000) + 1000; 
const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
const currentIban = document.querySelector('#currentIban').textContent = fullIban;


//get Balance
//Clicker
let balance = 0
 
const clickBtn = document.querySelector('#clickBtn');
const currentBalance = document.querySelector('#currentBalance');

clickBtn.addEventListener('click', function() {
    balance = balance + 1,
    currentBalance.textContent = balance
});

//---OPEN---
let display = 0;


//Open login window
const openLoginBtn = document.querySelector('#openLoginBtn');
const loginWndw = document.querySelector('.loginHide');

openLoginBtn.addEventListener("click", function () {
    if(display === 1){
        loginWndw.style.display = "block" 
        display = 0;
    } else {
        loginWndw.style.display = "none";
        display = 1;
    }
})


//Open send money window
const openSendWndw = document.querySelector('#openSendWndw');
const sendWndw = document.querySelector('.sendWndw');


openSendWndw.addEventListener("click", function () {
    if(display === 1){
        sendWndw.style.display = "block" 
        display = 0;
    } else {
        sendWndw.style.display = "none";
        display = 1;
    }
})


//Open request money window 
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

//....

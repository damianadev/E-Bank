// get & save Username
const userInput = document.querySelector('#userInput');
const saveUserBtn = document.querySelector('#saveUserBtn');
const userOutput = document.querySelector('#userOutput');
const currentUser = userInput.value.toUpperCase();

const key = "user";

function getUser(){
    const currentUser = userInput.value.toUpperCase();
    if (!currentUser) return;

    localStorage.setItem(key, currentUser);
    userOutput.textContent = localStorage.getItem(key);

    console.log("Current user is - " + currentUser);
};

saveUserBtn.addEventListener('click', getUser);
userOutput.textContent = localStorage.getItem(key);


// get & save IBAN
function getIban() {
    let twoDigitIban = Math.floor(Math.random() * 90) + 10;
    let fourDigitIban = Math.floor(Math.random() * 9000) + 1000;

    const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
    const currentIban = document.querySelector('#currentIban');

    localStorage.fullIban = fullIban;

    currentIban.textContent = localStorage.fullIban;

    console.log("User IBAN - " + currentIban.textContent);
};

saveUserBtn.addEventListener('click', getIban);
currentIban.textContent = localStorage.fullIban;


//Balance clicker
let balance = 0
 
const clickBtn = document.querySelector('#clickBtn');
const currentBalance = document.querySelector('#currentBalance');

clickBtn.addEventListener('click', function() {

    if ( localStorage.balance >= 0 ) {
        localStorage.balance = Number(localStorage.balance) + 1
    } else {
        localStorage.balance = 1 
    }
    currentBalance.textContent = localStorage.balance;

    console.log("User balance - " + localStorage.balance);
});

currentBalance.textContent = localStorage.balance;


//  !!!Add switch user system!!!


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


console.log("Current user is - " + userOutput.textContent);
console.log("User IBAN - " + currentIban.textContent);
console.log("User balance - " + currentBalance.textContent);
console.log("<----- NEW INFO ----->");

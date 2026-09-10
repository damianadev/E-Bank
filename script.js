// get & save & change Username
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

    console.log("CURRENT USER IS - " + localStorage.getItem(key));
};

saveUserBtn.addEventListener('click', getUser);
userOutput.textContent = localStorage.getItem(key);


// get & save & change IBAN
const currentIban = document.querySelector('#currentIban');

const key_user_iban = "iban_" + localStorage.getItem(key);

function getIban() {
    const key_user_iban = "iban_" + localStorage.getItem(key);

    if(localStorage.getItem(key_user_iban) === null){
        
        let twoDigitIban = Math.floor(Math.random() * 90) + 10;
        let fourDigitIban = Math.floor(Math.random() * 9000) + 1000;
        const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
        localStorage.setItem(key_user_iban, fullIban);
    }

    currentIban.textContent = localStorage.getItem(key_user_iban);

    console.log("USER " + localStorage.getItem(key) + " IBAN - " + localStorage.getItem(key_user_iban));
};

saveUserBtn.addEventListener('click', getIban);
currentIban.textContent = localStorage.getItem(key_user_iban);


//get & change balance 
const clickBtn = document.querySelector('#clickBtn');
const currentBalance = document.querySelector('#currentBalance');

const key_user_balance = "balance_" + localStorage.getItem(key);

function getBalance() {
    const key_user_balance = "balance_" + localStorage.getItem(key);

    if ( localStorage.getItem(key_user_balance) === null ) {
        localStorage.setItem(key_user_balance, 1) 
    } else {
        localStorage.setItem(key_user_balance, Number(localStorage.getItem(key_user_balance)) + 1)
    }

    currentBalance.textContent = localStorage.getItem(key_user_balance);

    console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));
};

clickBtn.addEventListener('click', getBalance);

saveUserBtn.addEventListener('click', function(){
    const key_user_balance = "balance_" + localStorage.getItem(key);

    currentBalance.textContent = localStorage.getItem(key_user_balance);

    console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));
});

currentBalance.textContent = localStorage.getItem(key_user_balance);


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


console.log("CURRENT USER IS - " + localStorage.getItem(key));
console.log("USER " + localStorage.getItem(key) + " IBAN - " + localStorage.getItem(key_user_iban));
console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));
console.log("<----- NEW INFO ----->");

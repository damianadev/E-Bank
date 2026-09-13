// get & save & change Username
const userInput = document.querySelector('#userInput');
const saveUserBtn = document.querySelector('#saveUserBtn');
const userOutput = document.querySelector('#userOutput');
const currentUser = userInput.value.toUpperCase();

const key = "user";                                                                                                                     //define key for storing the username

function getUser(){
    const currentUser = userInput.value.toUpperCase();                                                                                  //get username from input and convert it to uppercase
    if (!currentUser) return;                                                                                                           //check if username was entered

    localStorage.setItem(key, currentUser);                                                                                             //store username by key in localStorage
    userOutput.textContent = localStorage.getItem(key);                                                                                 //display the username using the value stored in localStorage

    console.log("CURRENT USER IS - " + localStorage.getItem(key));                                                                      //display username in console
};

saveUserBtn.addEventListener('click', getUser);                                                                                         //add function getUser() to button
userOutput.textContent = localStorage.getItem(key);                                                                                     //display the saved username so it stays visible after page reload

// get & save & change IBAN
const currentIban = document.querySelector('#currentIban');

const key_user_iban = "iban_" + localStorage.getItem(key);                                                                              //define key for storing users iban, iban_ + username example: iban_DAMIAN

function getIban() {
    const key_user_iban = "iban_" + localStorage.getItem(key);

    if(localStorage.getItem(key_user_iban) === null){                                                                                   //check if an iban already exists; if not, create one
        let twoDigitIban = Math.floor(Math.random() * 90) + 10;
        let fourDigitIban = Math.floor(Math.random() * 9000) + 1000;
        const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
        localStorage.setItem(key_user_iban, fullIban);
    }

    currentIban.textContent = localStorage.getItem(key_user_iban);                                                                      //display users iban by key in localStorgae 

    console.log("USER " + localStorage.getItem(key) + " IBAN - " + localStorage.getItem(key_user_iban));                                //display users iban in console
};

saveUserBtn.addEventListener('click', getIban);                                                                                         //add function getIban() to button
currentIban.textContent = localStorage.getItem(key_user_iban);                                                                          //display saved users iban so it stays visible after page is reloaded


//get & save & change balance 
const clickBtn = document.querySelector('#clickBtn');
const currentBalance = document.querySelector('#currentBalance');

const key_user_balance = "balance_" + localStorage.getItem(key);                                                                        //define key for storing users balance, balance_ + username example: balance_DAMIAN

function getBalance() {
    const key_user_balance = "balance_" + localStorage.getItem(key);

    if ( localStorage.getItem(key_user_balance) === null ) {                                                                            //check if the user has a balance stored in localStorage
        localStorage.setItem(key_user_balance, 1)                                                                                       //if no users balance, create the balance and set it to 1
    } else {
        localStorage.setItem(key_user_balance, Number(localStorage.getItem(key_user_balance)) + 1)                                      //if balance exist, increase existing balance by 1
    }

    currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                //display updated balance

    console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));                          //display updated balance in the console
};

function saveBalance(){                                                                                                                 //load and display the saved balance
    const key_user_balance = "balance_" + localStorage.getItem(key);                                            
    currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                //display updated balance

    console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));                          //display updated balance in console 
};

clickBtn.addEventListener('click', getBalance);                                                                                         //add getBalance() function to button
saveUserBtn.addEventListener('click', saveBalance);                                                                                     //add saveBalance() function to button
currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                    //display updated balance so it stays visible after page is reloaded


//---OPEN---
let display = 0;


//Open login window
const openLoginBtn = document.querySelector('#openLoginBtn');
const loginWndw = document.querySelector('.loginHide');

function openLogin() {
    if(display === 1){
        loginWndw.style.display = "block" 
        display = 0;
    } else {
        loginWndw.style.display = "none";
        display = 1;
    }
}

openLoginBtn.addEventListener("click", openLogin);
saveUserBtn.addEventListener('click', openLogin);

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

//<--- SEND/REQUEST MONEY --->
// send money
const sendUserInput = document.querySelector('#sendUserInput');
const sendIbanInput = document.querySelector('#sendIbanInput');
const sendAmountInput = document.querySelector('#sendAmountInput');

function sendMoney(){
    if(!sendUserInput.value) return;                                                                                                    //check if user entered the beneficiary name 

    const key_getter_iban = localStorage.getItem("iban_" + sendUserInput.value.toUpperCase());                                          //define key for storing beneficiary iban, iban_ + beneficiary iban example: iban_USERNAME
    
    if(key_getter_iban === null){                                                                                                       //check if beneficiary iban exist, if no: alert
        alert("No such a user");
        return;
    }

    const key_user_balance = "balance_" + localStorage.getItem(key);                                                                    //update current users balance key 
    const key_getter_balance = "balance_" + sendUserInput.value.toUpperCase();                                                          //define key for storing beneficiary balance, balance_ + beneficiary balance example: balance_USERNAME

    function transferMoney(){                                                                                                           //send the entered amount to the beneficiary if the current user has enough funds and the amount is greater than 0
        if(Number(sendAmountInput.value) <= 0 )
            return;

        if(Number(sendAmountInput.value) > Number(localStorage.getItem(key_user_balance)))
            return;

    localStorage.setItem(key_getter_balance, Number(localStorage.getItem(key_getter_balance)) + Number(sendAmountInput.value));
    localStorage.setItem(key_user_balance, Number(localStorage.getItem(key_user_balance)) - Number(sendAmountInput.value));
    } 
    transferMoney();                                                                                                                    //activate transferMoney() function

    currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                //display updated balance

    console.log("USER " + localStorage.getItem(key) + " SENT USER " + sendUserInput.value.toUpperCase() + " " + Number(sendAmountInput.value) + " DJCOINS");
}

openSendWndw.addEventListener('click', sendMoney);
currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                    //display updated balance so it stays visible after page is reloaded


//!!! ADD REQUEST FUNCTION !!!
const reqUserInput = document.querySelector('#reqUserInput');
const reqIbanInput = document.querySelector('#reqIbanInput');
const reqAmountInput = document.querySelector('#reqAmountInput');

const userRequests = document.querySelector('#requests');
const key_req_getter = "req_" + reqUserInput.value.toUpperCase();
const key_req_sender = "req_" + localStorage.getItem(key);

function reqMoney(){
    if(!reqUserInput.value) return;

    const key_req_getter_iban = localStorage.getItem("iban_" + reqUserInput.value.toUpperCase());                                          //define key for storing beneficiary iban, iban_ + beneficiary iban example: iban_USERNAME
    
    if(key_req_getter_iban === null){                                                                                                       //check if beneficiary iban exist, if no: alert
        alert("No such a user");
        return;
    }

    const key_user_balance = "balance_" + localStorage.getItem(key);                                                                    //update current users balance key 
    const key_req_getter_balance = "balance_" + reqUserInput.value.toUpperCase();

    const request = {
    sender: localStorage.getItem(key),
    getter: reqUserInput.value.toUpperCase(),
    amount: Number(reqAmountInput.value),
    status: "pending"
    };

    const requestsSender = JSON.parse(localStorage.getItem(key_req_sender)) || [];
    requestsSender.push(request);
    localStorage.setItem(key_req_sender, JSON.stringify(requestsSender));

    const requestsGetter = JSON.parse(localStorage.getItem(key_req_getter)) || [];
    requestsGetter.push(request);
    localStorage.setItem(key_req_getter, JSON.stringify(requestsGetter));
 

    requestsSender.forEach(request=> {
        const reqDiv = document.createElement('div');
        reqDiv.className = "reqDiv";

        const reqStatusSpan = document.createElement('span');
        reqStatusSpan.className = "reqStatusSpan";
        reqStatusSpan.textContent =  request.status;

        const reqDeclineBtn = document.createElement('button');
        reqDeclineBtn.className = "reqDeclineBtn";
        reqDeclineBtn.textContent = "Decline"

        const reqAcceptBtn = document.createElement('button');
        reqAcceptBtn.className = "reqAcceptBtn";
        reqAcceptBtn.textContent = "Accept"
        
        reqDiv.appendChild(reqStatusSpan);
        reqDiv.appendChild(reqDeclineBtn);
        reqDiv.appendChild(reqAcceptBtn);
        
        userRequests.appendChild(reqDiv);
    });

}


openRequestWndw.addEventListener('click', reqMoney);

//....


//console.log users info
console.log("CURRENT USER IS - " + localStorage.getItem(key));
console.log("USER " + localStorage.getItem(key) + " IBAN - " + localStorage.getItem(key_user_iban));
console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));
console.log("<----- NEW INFO ----->");

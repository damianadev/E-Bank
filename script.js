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

    console.log("CURRENT USER IS - " + localStorage.getItem(key));                                                                     //display username in console

    userInput.value ="";
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

    sendUserInput.value = "";
    sendIbanInput.value = "";
    sendAmountInput.value = "";

}

openSendWndw.addEventListener('click', sendMoney);
currentBalance.textContent = localStorage.getItem(key_user_balance);                                                                    //display updated balance so it stays visible after page is reloaded


//request money 
const reqUserInput = document.querySelector('#reqUserInput'); 
const reqIbanInput = document.querySelector('#reqIbanInput'); 
const reqAmountInput = document.querySelector('#reqAmountInput'); 
 
const userRequests = document.querySelector('#requests'); 
const key_req_getter = "req_" + reqUserInput.value.toUpperCase(); 
 
function reqMoney(){ 
    if(!reqUserInput.value) return; 
 
    const key_req_getter = "req_" + reqUserInput.value.toUpperCase(); 
    const key_req_sender = "req_" + localStorage.getItem(key);
 
    const key_req_getter_iban = localStorage.getItem("iban_" + reqUserInput.value.toUpperCase()); 
     
    if(key_req_getter_iban === null){ 
        alert("No such a user"); 
        return; 
    } 
 
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
 
    reqUserInput.value = ""; 
    reqIbanInput.value = ""; 
    reqAmountInput.value = ""; 
 
    showReq(); 
} 
 
function showReq() { 
 
    userRequests.innerHTML = ""; 
 
    const key_current_user = "req_" + localStorage.getItem(key); 
 
    const requests = JSON.parse(localStorage.getItem(key_current_user)) || []; 
 
    requests.forEach(request => { 
 
        const reqDiv = document.createElement('div'); 
        reqDiv.className = "reqDiv"; 
 
        const reqMessage = document.createElement('p'); 
        reqMessage.className = "reqMessage"; 
        reqMessage.textContent = request.sender + " ASKED " + request.getter;  
         
        const reqAmountSpan = document.createElement('span'); 
        reqAmountSpan.className = "reqAmountSpan"; 
        reqAmountSpan.textContent = request.amount + "DJCOINS"; 
 
        const reqStatusSpan = document.createElement('span'); 
        reqStatusSpan.className = "reqStatusSpan"; 
        reqStatusSpan.textContent = request.status; 
 
        reqDiv.appendChild(reqMessage); 
        reqDiv.appendChild(reqAmountSpan); 
        reqDiv.appendChild(reqStatusSpan); 
 
        // ACCEPT + DECLINE only for getter and only while pending
        if(
            localStorage.getItem(key) === request.getter &&
            request.status === "pending"
        ){ 
 
            const reqDeclineBtn = document.createElement('button'); 
            reqDeclineBtn.className = "reqDeclineBtn"; 
            reqDeclineBtn.textContent = "Decline"; 
 
            const reqAcceptBtn = document.createElement('button'); 
            reqAcceptBtn.className = "reqAcceptBtn"; 
            reqAcceptBtn.textContent = "Accept"; 
 
            reqDeclineBtn.addEventListener('click', function(){  
                declineRequest(request);  
            }); 
 
            reqAcceptBtn.addEventListener('click', function(){ 
                transferMoney(request); 
            }); 
 
            reqDiv.appendChild(reqDeclineBtn); 
            reqDiv.appendChild(reqAcceptBtn); 
        } 
 
        // REMOVE for both users after accepted or declined
        if(
            request.status === "accepted" ||
            request.status === "declined"
        ){
 
            const reqRemoveBtn = document.createElement('button'); 
            reqRemoveBtn.className = "reqRemoveBtn"; 
            reqRemoveBtn.textContent = "Remove"; 
 
            reqRemoveBtn.addEventListener('click', function(){ 
                removeRequest(request); 
            }); 
 
            reqDiv.appendChild(reqRemoveBtn); 
        }
 
        userRequests.appendChild(reqDiv); 
    }); 
} 
 
function transferMoney(request){  
 
    const key_user_balance = "balance_" + localStorage.getItem(key);  
    const key_req_getter_balance = "balance_" + request.sender;  
 
    const amount = Number(request.amount);  
 
    if(amount <= 0)  
        return;  
 
    if(amount > Number(localStorage.getItem(key_user_balance)))  
        return;  
 
    const getterBalance = Number(localStorage.getItem(key_req_getter_balance)) || 0;  
 
    localStorage.setItem( 
        key_req_getter_balance, 
        getterBalance + amount 
    );  
 
    localStorage.setItem( 
        key_user_balance, 
        Number(localStorage.getItem(key_user_balance)) - amount 
    );  
 
    request.status = "accepted";  
 
    const currentUserRequests = JSON.parse( 
        localStorage.getItem("req_" + localStorage.getItem(key)) 
    ) || [];  
 
    const senderRequests = JSON.parse( 
        localStorage.getItem("req_" + request.sender) 
    ) || [];  
 
    currentUserRequests.forEach(item => {  
        if( 
            item.sender === request.sender && 
            item.getter === request.getter && 
            item.amount === request.amount && 
            item.status === "pending" 
        ){ 
            item.status = "accepted";  
        }  
    });  
 
    senderRequests.forEach(item => {  
        if( 
            item.sender === request.sender && 
            item.getter === request.getter && 
            item.amount === request.amount && 
            item.status === "pending" 
        ){ 
            item.status = "accepted";  
        }  
    });  
 
    localStorage.setItem( 
        "req_" + localStorage.getItem(key), 
        JSON.stringify(currentUserRequests) 
    );  
 
    localStorage.setItem( 
        "req_" + request.sender, 
        JSON.stringify(senderRequests) 
    );  

    // update balance immediately
    currentBalance.textContent = localStorage.getItem(key_user_balance);
 
    showReq();  
}  
 
 
function declineRequest(request){  
 
    const currentUserRequests = JSON.parse( 
        localStorage.getItem("req_" + localStorage.getItem(key))
    ) || [];  
 
    const senderRequests = JSON.parse( 
        localStorage.getItem("req_" + request.sender)
    ) || [];  
 
    currentUserRequests.forEach(item => { 
        if( 
            item.sender === request.sender && 
            item.getter === request.getter && 
            item.amount === request.amount && 
            item.status === "pending"
        ){ 
            item.status = "declined"; 
        } 
    }); 
 
    senderRequests.forEach(item => { 
        if( 
            item.sender === request.sender && 
            item.getter === request.getter && 
            item.amount === request.amount && 
            item.status === "pending"
        ){ 
            item.status = "declined"; 
        } 
    }); 
 
    localStorage.setItem( 
        "req_" + localStorage.getItem(key), 
        JSON.stringify(currentUserRequests) 
    ); 
 
    localStorage.setItem( 
        "req_" + request.sender, 
        JSON.stringify(senderRequests) 
    ); 
 
    showReq();  
} 


function removeRequest(request){ 

    const currentUserRequests = JSON.parse(
        localStorage.getItem("req_" + localStorage.getItem(key))
    ) || [];

    const senderRequests = JSON.parse(
        localStorage.getItem("req_" + request.sender)
    ) || [];

    const newCurrentUserRequests = currentUserRequests.filter(item => {
        return !(
            item.sender === request.sender &&
            item.getter === request.getter &&
            item.amount === request.amount
        );
    });

    const newSenderRequests = senderRequests.filter(item => {
        return !(
            item.sender === request.sender &&
            item.getter === request.getter &&
            item.amount === request.amount
        );
    });

    localStorage.setItem(
        "req_" + localStorage.getItem(key),
        JSON.stringify(newCurrentUserRequests)
    );

    localStorage.setItem(
        "req_" + request.sender,
        JSON.stringify(newSenderRequests)
    );

    showReq();
}


openRequestWndw.addEventListener('click', reqMoney); 
 
showReq(); 
 
saveUserBtn.addEventListener('click', showReq); 
 
currentBalance.textContent = localStorage.getItem(key_user_balance);Storage.getItem(key_user_balance);

//....


//console.log users info
console.log("CURRENT USER IS - " + localStorage.getItem(key));
console.log("USER " + localStorage.getItem(key) + " IBAN - " + localStorage.getItem(key_user_iban));
console.log("USER " + localStorage.getItem(key) + " BALANCE - " + localStorage.getItem(key_user_balance));
console.log("<----- NEW INFO ----->");

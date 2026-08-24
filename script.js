//get username
const username = prompt("To login, you need to type your username!");
const currentUser= document.querySelector('#currentUser').textContent = username


//get Iban
let twoDigitIban = Math.floor(Math.random() * 90) + 10;
let fourDigitIban = Math.floor(Math.random() * 9000) + 1000; 
const fullIban = ("DJ" + twoDigitIban + " " + fourDigitIban );
const currentIban = document.querySelector('#currentIban').textContent = fullIban;

//get Balance
let balance = "100,00";
const currentBalance = document.querySelector('#currentBalance').textContent = balance;
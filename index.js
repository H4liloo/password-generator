
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15

let generateBtnEl = document.getElementById("generate-btn-el")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

function randomChar() {
    let getRandomChar = Math.floor(Math.random() *characters.length)
    return characters[getRandomChar]
}

function genRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += randomChar()
    }
    return randomPassword
    
}

function btnClick(){
    let randomPasswordOne = genRandomPassword()
    let randomPasswordTwo = genRandomPassword()

    passwordOneEl.textContent = randomPasswordOne
    passwordTwoEl.textContent = randomPasswordTwo
}

// src/main.js
window.btnClick = btnClick;


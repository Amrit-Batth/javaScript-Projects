const passwordBox = document.querySelector("input");
const btn = document.querySelector("button");
const copy = document.querySelector("h6");

const length=12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const special = "~`!@#$%^&*()_+/*-?><:;";

const allChars = upperCase + lowerCase + numbers + special;

const generatePassword = ()=>{
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += special[Math.floor(Math.random() * special.length)]

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password;
}

btn.addEventListener("click",()=>{
    generatePassword();
})


copy.addEventListener("click",()=>{
    if(document.querySelector(".display input").value !=""){
        const pass = document.querySelector(".display input").value;
        passwordBox.select();
    }
})

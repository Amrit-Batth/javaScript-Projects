const inputField = document.querySelector("#password");
const btn  = document.querySelector("button");

btn.addEventListener("click",()=>{
    if(inputField.type == "password") {
        inputField.type="text";
    }else {
        inputField.type="password";
    }
})





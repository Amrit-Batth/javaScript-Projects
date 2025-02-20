const toastBox = document.getElementById("toastbox");
const successBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");

let successMsg = 'Successfully Submited';
let errorMsg = 'Please Fis this Error';
let invalidMsg = 'Invalid Message Please try again';

successBtn.addEventListener("click",()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = successMsg;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);
});

errorBtn.addEventListener("click",()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = errorMsg;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);
});

invalidBtn.addEventListener("click",()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = invalidMsg;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);
});
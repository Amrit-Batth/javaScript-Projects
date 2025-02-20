const input = document.getElementById("input-box");
const btn = document.querySelector("button");

console.log(input);
const ul = document.getElementById("list-container");
let li;

btn.addEventListener("click",()=>{
    if(input.value != ''){
        li  = document.createElement("li");
        li.innerHTML = input.value;
        ul.prepend(li);
        input.value="";
    }
})



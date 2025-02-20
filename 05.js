const createbtn = document.querySelector("button");
const Text_Container = document.querySelector(".notes-container");
const notes = document.querySelector("input-box");
const delBtn = document.querySelector("h6");


createbtn.addEventListener("click",()=>{
    let inputEle = document.createElement("p")
    let delbtn = document.createElement("h6");
    inputEle.className="input-box";
    inputEle.setAttribute("contenteditable","true");
    delbtn.textContent="Delete";
    Text_Container.appendChild(inputEle).appendChild(delbtn);
})

delBtn.addEventListener("click",(e)=>{
    if(e.target.tagName === "h6") {
        e.target.parentElement.remove();
    }
})
import createHome from "./main";

const content = document.getElementById("body");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener('click', event => {
        changeTab(button);
    })
})

function changeTab(element){
    createTab();
}

function createTab(){
    content.innerHTML="";
    const element = createHome();
    content.appendChild(element);
}


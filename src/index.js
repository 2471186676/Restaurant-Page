let buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener('click', event => {
        changeTab(button);
    })
})

function changeTab(element){
    console.log(element.innerHTML);
}
import {createHome} from "./main";
import {createFood} from "./food";
import { createContact } from "./contact";


const content = document.getElementById("body");
//content.appendChild(createHome());

let food = [["soy_milk", "Tasty drink milked from soy beans"],
            ["congee", "Sliced pork with egg on top"],
            ["youtiao","Soft and crunchy fried dough"],
            ["combo","Breakfast that fills you up"],];


let tabHome = document.getElementById("home");
tabHome.addEventListener('click', event => {createTab(tabHome);})

let tabServing = document.getElementById("serving");
tabServing.addEventListener('click', event => {createTab(tabServing);})

let tabContact = document.getElementById("contact");
tabContact.addEventListener('click', event => {createTab(tabContact);})


function createTab(tab){

    content.innerHTML="";

    switch(tab){
        case tabHome:
            console.log("home");
            content.appendChild(createHome());
            break;
        case tabServing:
            console.log("serving")
            content.appendChild(createFood(food));
            break;
        case tabServing:
            console.log("contact");
            break;
    }
}


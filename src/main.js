import img from './img/cafe.jpg';

function createElement(type,class_name, content){
  const element = document.createElement(type);
  element.className = class_name;

  element.innerHTML = content;

  return element;
}

function createImg(source){
  const elementing = new Image()
  elementing.src = img;

  return elementing;
}

export default function createHome(){
  const content = document.createElement("div");
  content.id = "content";

  content.appendChild(createImg("/src/img/cafe.jpg"));

  content.appendChild(createElement("p","", 
  `“Bing Sat” first started in Canton (Guangzhou) around 1950s to 1960s. “Bing Shi” used to only sell ice-cream, 
  coffee and tea and pastry. Hong Kong “Bing Sat” could only legally operate as “snack licence”. They can only sell drinks, 
  sandwiches and pastries, and were not allowed to operate as a full cooking kitchen. As time past, many of the “Bing Sat” were 
  able to obtain full restaurant licence, which then transformed into modern Tea Diner (Cha Chaan Teng).`));

  content.appendChild(createElement("p","",
  `In the 1950s to 1960s, to meet the needs of blue collar workers, “Bing Shi” imitated Western Steak House and started selling l
  ow-priced steak and set meals. Moving on to 1970s and 1980s, the economy blooms, “Bing Sat” became common among the middle class 
  people. The spending ability increased, and to cater for the demand of the people, “Bing Sat” started expanding their 
  variety of food, which eventually transformed into Modern Tea Diner (Cha Chaan Teng)`));

  console.log(1234);

  return content;
}


  



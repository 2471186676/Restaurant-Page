export function createFood(food){
    const content = document.createElement("div");
    content.id = "menu";
  
    for(let i = 0; i < food.length; i++){
      let foodDiv = document.createElement("div");
      foodDiv.id = "food";
      let img = document.createElement("img");
      let name = document.createElement("p");
      let disc = document.createElement("p");
  
  
      img.src = '/img/' + food[i][0]+'.png';
      img.alt = food[i][0];
      name.innerHTML = food[i][0];
      disc.innerHTML = food[i][1];
  
      foodDiv.appendChild(img);
      foodDiv.appendChild(name);
      foodDiv.appendChild(disc);
  
      content.appendChild(foodDiv);
    }
  
    return content;
  }
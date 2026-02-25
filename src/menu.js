function loadmenu(){
  
  const content = document.querySelector("#content");
  
  const menu = document.createElement("div")
  const ourmenuh1= document.createElement("h1");
  ourmenuh1.textContent = "Our Menu";
 
  const jollof = document.createElement("p");
  jollof.textContent = "Jollof Rice – ₦3,000 ";
  
  const peppersoup = document.createElement("p");
  peppersoup.textContent = "Nigerian Pepper Soup – ₦3,200";
  
  const chicken = document.createElement("p");
  chicken.textContent = "Grilled Chicken – ₦4,500";
  
  const egusi = document.createElement("p");
  egusi.textContent = "Egusi Soup with Pounded Yam – ₦4,000";
  
  const suya = document.createElement("p");
  suya.textContent = "Suya – ₦2,500";
  
  const plantain = document.createElement("p");
  plantain.textContent = "Fried Plantains – ₦1,500";
  
  
  menu.append(ourmenuh1, jollof, peppersoup, chicken, egusi, suya, plantain );
  
  content.appendChild(menu);
}

export { loadmenu };


/*Jollof Rice – ₦3,000
Grilled Chicken – ₦4,500
Egusi Soup with Pounded Yam – ₦4,000
Suya Skewers – ₦2,500
Fried Plantains – ₦1,500
Nigerian Pepper Soup – ₦3,200*/
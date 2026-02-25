 function loadhome () {
  
  const content = document.querySelector("#content");
  
  const newdiv =  document.createElement("div");
  const newh1 = document.createElement("h1");
  newh1.textContent = "Wilfred's Kitchen";

  const newp = document.createElement("p");
  newp.textContent = "Serving the freshest and most delicious meals in Abuja. From local favorites to international dishes, every bite is made with love and care.";
  
  newdiv.append( newh1,newp);
  
  content.appendChild(newdiv); 
  
}


export {loadhome};
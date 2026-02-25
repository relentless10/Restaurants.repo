import {loadhome} from "./home.js";
import {loadmenu} from './menu.js';
import {loadcontact} from './contact.js';

loadhome();

loadmenu();

loadcontact();

const btn = document.querySelectorAll(".btn")


function clearcontent () {
   const content = document.getElementById("content");
   
   content.textContent= "";
}


btn.forEach(btn  => { btn.addEventListener("click",() =>{
  
  clearcontent();
  
  if (btn === home) {
     loadhome();
  } else if (btn === menu) {
     loadmenu();
  }else {
     loadcontact();
  }
   
});
});
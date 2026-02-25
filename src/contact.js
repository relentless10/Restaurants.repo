export function loadcontact() {
  
  const content = document.querySelector("#content");
  
  const contact = document.createElement("div");
  
  const reachus = document.createElement("h1");
  reachus.textContent = "Contact Us";
  
  const phone = document.createElement("p");
  phone.textContent = " phoneNo : 0103963900";
  
  const location = document.createElement("p");
  location.textContent = " Address : 10 ademola tokumbo street Wuse2 Abuja.";
  
  contact.append(reachus, phone, location);
  
  content.appendChild(contact);
}
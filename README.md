# Restaurants.repo
A restaurant webpage built for my Odin project assignments with my phone 


Wilfred's Kitchen – Restaurant Page
Overview
This project is a simple restaurant homepage for Wilfred's Kitchen. It demonstrates DOM manipulation with JavaScript to dynamically render the entire page content.
The main goal was to practice creating a modular, tabbed website without using any bundlers, packages, or build tools — everything was done manually, even from a mobile device.
Features
Fully dynamic content loaded via JavaScript modules
Home
Menu
Contact
Tab navigation using buttons
Single content area cleared and updated on tab clicks
Clean and responsive layout with CSS
No frameworks, no bundlers, no npm packages
Project Structure
Copy code

restaurant-page/
│
├── index.html       # Main HTML file with header and empty content div
├── style.css        # All styling for layout, buttons, and typography
└── src/
    ├── index.js     # Main JS file controlling tab logic
    ├── home.js      # Module for Home page content
    ├── menu.js      # Module for Menu page content
    └── contact.js   # Module for Contact page content
How It Works
Page Load
The index.js file imports all modules and initially loads the Home page.
Tabs
Each button in the navigation has an event listener
Clicking a button clears the main content area and loads the selected module
Modules
Each module creates DOM elements (<div>, <h1>, <p>) dynamically
These elements are appended to the main content container (#content)
Key Notes
Built entirely on a mobile device, using only vanilla HTML, CSS, and JavaScript
No webpack, no npm, no bundlers — fully compatible with modern browsers
Focused on modular architecture and clean separation of concerns
Styling was added via a separate CSS file
How to Run
Open index.html in any modern browser
Click the Home, Menu, or Contact buttons to navigate between pages
All content is generated dynamically with JavaScript
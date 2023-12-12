import './style.css'
import vonWithPieImg from './img/vonWithPie1.png';
import pieSVG from './img/pieTab.svg'
import {initializeHomePage} from './home.js'
import {initializeContactPage} from './contact.js'
import {initializeMenuPage} from'./menu.js'

document.addEventListener('DOMContentLoaded', function() {
  // DOM is fully parsed and ready for manipulation
  
  const contentElement = document.querySelector('#content')
  
  // Add the image to our existing div.
  let pageElements = initializeHomePage();
  contentElement.appendChild(pageElements.header);
  contentElement.appendChild(pageElements.main);
  contentElement.appendChild(pageElements.footer);
});


// checkOneTwo()
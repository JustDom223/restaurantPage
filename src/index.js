import './style.css'
import vonWithPieImg from './img/vonWithPie1.png';
import pieSVG from './img/pieTab.svg'
import {initializeHomePage} from './home.js'
import {initializeContactPage} from './contact.js'
import {initializeMenuPage} from'./menu.js'
import { createHeader, populateMain } from './header.js';
import { createFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', function() {
  // DOM is fully parsed and ready for manipulation
  
  const contentElement = document.querySelector('#content')
  
  // Add the image to our existing div.

  contentElement.appendChild(createHeader());
  contentElement.appendChild(populateMain('homeTab'));
  contentElement.appendChild(createFooter());

  
}



);

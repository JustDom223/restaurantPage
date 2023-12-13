import './style.css'
import { createHeader} from './header.js';
import { createFooter } from './footer.js';
import { populateMain } from './script.js';

document.addEventListener('DOMContentLoaded', function() {
  // DOM is fully parsed and ready for manipulation
  
  const contentElement = document.querySelector('#content')
  
  // Add the image to our existing div.

  contentElement.appendChild(createHeader());
  contentElement.appendChild(populateMain('homeTab'));
  contentElement.appendChild(createFooter());

  
}



);

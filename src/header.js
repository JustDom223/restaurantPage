import pieSVG from './img/pieTab.svg'
import {initializeHomePage} from './home.js'
import { initializeMenuPage } from './menu.js';
const mainElement = document.querySelector('#main')

export function createHeader() {
    const headerElement = document.createElement('header');
    // Add any other header-specific elements
    
    // children for header
    const headingElement = document.createElement('h1');
    const tabList = document.createElement('ul');
    
    // Children for header tab list
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    
    // Tab ID's
    tabList.id = 'tabs'
    homeTab.id = 'homeTab'
    menuTab.id = 'menuTab'
    contactTab.id = 'contactTab'
    
    // Add the class to each tab
    homeTab.classList.add('tab');
    menuTab.classList.add('tab');
    contactTab.classList.add('tab');
    
    tabList.addEventListener('click', (event) => {
        // Check if the clicked element is a tab
        const clickedTab = event.target.closest('li')
        const clickedElementId = clickedTab.id;
        if (clickedTab.classList.contains('tab')) {
            console.log(clickedTab)
            let clickedElementId = event.currentTarget.id;
            let mainContent = populateMain()
            mainElement.appendChild(mainContent.img);
            mainElement.appendChild(mainContent.content);
        }
    });
    
function populateMain(clickedElementId){
            // Clear main
            mainElement.innerHTML = '';
            // Children for main
            const mainTextElement = document.createElement('p');
            
            // Adding content to main elements
            
            if(clickedElementId === 'homeTab'){
                mainElement.appendChild(initializeHomePage())
            }else if(clickedElementId === 'menuTab'){
                mainElement.appendChild(initializeMenuPage(chickenPie, content))
                
            }else if(clickedElementId === 'contactTab'){
                mainTextElement.textContent = 'contact'
            }
            return {
                img: vonWithPieElement,
                content: mainTextElement
            }
        }
    
    // Children for tabs
    function createTabImg(){
        const tabPieSvg = new Image();
        tabPieSvg.src = pieSVG;
        return tabPieSvg
        
    }
    
    const homeTabHeading = document.createElement('h2')
    const menuTabHeading = document.createElement('h2')
    const contactTabHeading = document.createElement('h2')
    
    // Adding content to header elements
    headingElement.textContent = "Von's Pies";
    tabList.appendChild(homeTab);
    tabList.appendChild(menuTab);
    tabList.appendChild(contactTab);
    
    homeTabHeading.textContent = 'Home';
    menuTabHeading.textContent = 'Menu';
    contactTabHeading.textContent = 'Contact';
    
    
    homeTab.appendChild(createTabImg(pieSVG));
    menuTab.appendChild(createTabImg(pieSVG));
    contactTab.appendChild(createTabImg(pieSVG));
    
    homeTab.appendChild(homeTabHeading);
    menuTab.appendChild(menuTabHeading);
    contactTab.appendChild(contactTabHeading);

    // Appending Header
    headerElement.appendChild(headingElement);
    headerElement.appendChild(tabList);
    
    return headerElement;
}
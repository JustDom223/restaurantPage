import pieSVG from './img/pieTab.svg'
import steamSVG from './img/steam.svg'
import { setActiveTab } from './script.js';
import { populateMain } from './script.js';

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
        const contentElement = document.querySelector('#content')
        const clickedTab = event.target.closest('li');
        if (clickedTab.classList.contains('tab')) {
            const clickedElementId = clickedTab.id;
            const newMainContent = populateMain(clickedElementId);
    
            // Replace the existing main content with the new one
            const existingMainElement = document.querySelector('main');
            contentElement.replaceChild(newMainContent, existingMainElement);
            setActiveTab(clickedElementId)
        }
    });
    
    
    
    // Children for tabs
    function createTabImg(){
        const tabPieSvg = new Image();
        tabPieSvg.src = pieSVG;
        return tabPieSvg
        
    }
    function createSteamImg(){
        const tabSteam = new Image();
        tabSteam.src = steamSVG;
        tabSteam.classList.add('steam')
        return tabSteam
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
    
    
    homeTab.appendChild(createTabImg());
    menuTab.appendChild(createTabImg());
    contactTab.appendChild(createTabImg());

    homeTab.appendChild(createSteamImg())
    menuTab.appendChild(createSteamImg())
    contactTab.appendChild(createSteamImg())
    
    homeTab.appendChild(homeTabHeading);
    menuTab.appendChild(menuTabHeading);
    contactTab.appendChild(contactTabHeading);

    // Appending Header
    headerElement.appendChild(headingElement);
    headerElement.appendChild(tabList);
    
    return headerElement;
}
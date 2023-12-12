import pieSVG from './img/pieTab.svg'
import {initializeHomePage} from './home.js'
import { initializeMenuPage } from './menu.js';
import { initializeContactPage } from './contact.js';

export function populateMain(clickedElementId){
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';
    console.log('we were meant to clear')
    
    // Adding content to main elements
    
    if(clickedElementId === 'homeTab'){
        const newElements = initializeHomePage()
        mainElement.appendChild(newElements.frontImg)
        mainElement.appendChild(newElements.content)
        console.log(mainElement)
    }else if(clickedElementId === 'menuTab'){
        mainElement.appendChild(initializeMenuPage(chickenPie, content))
        
    }else if(clickedElementId === 'contactTab'){
        console.log('we made it')
        const newElements = initializeContactPage()
        console.log(newElements)
        mainElement.appendChild(newElements)
    }
    return mainElement
}

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
            console.log(clickedElementId);
    
            const newMainContent = populateMain(clickedElementId);
    
            // Replace the existing main content with the new one
            const existingMainElement = document.querySelector('main');
            if (existingMainElement) {
                contentElement.replaceChild(newMainContent, existingMainElement);
            }
        }
    });
    
    
    
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
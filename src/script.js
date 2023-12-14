import { initializeHomePage } from "./home";
import { initializeMenuPage } from "./menu";
import { initializeContactPage } from "./contact";
import chickenPie from './img/pieImgs/chickenPie.png'

export function setActiveTab(selectedTabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        const steam = tab.querySelector('.steam')
        if (tab.id === selectedTabId) {
            steam.classList.add('active');
        } else {
            steam.classList.remove('active');
        }
    });
}
export function populateMain(clickedElementId){
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';
    
    // Adding content to main elements
    
    if(clickedElementId === 'homeTab'){
        const newElements = initializeHomePage()
        mainElement.appendChild(newElements.frontImg)
        mainElement.appendChild(newElements.content)
    }else if(clickedElementId === 'menuTab'){
        const pieCards = initializeMenuPage()
        pieCards.forEach(pie =>{
            mainElement.appendChild(pie)
        })
        
    }else if(clickedElementId === 'contactTab'){
        const newElements = initializeContactPage()
        mainElement.appendChild(newElements)
    }
    return mainElement
}
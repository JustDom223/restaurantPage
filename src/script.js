import { initializeHomePage } from "./home";
import { initializeMenuPage } from "./menu";
import { initializeContactPage } from "./contact";
import chickenPie from './img/pieImgs/chickenPie.png'

const pieImages = require.context('./img/pieImgs/', false, /\.(png|jpe?g|svg)$/)

const importPieImages = (imageContent) => {
    let images = {};
    imageContent.keys().forEach((item) => {
        images[item.replace('./', '')] = imageContent(item);

    });
    return images;
}

const allPies = importPieImages(pieImages)
console.log(allPies)

const pies = {
    "name": "Creamy Chicken Pie",
    "description": "Delish creamy chicken pie with perfect flaky puff pastry.",
    "image": "src/img/pieImgs/chickenPie.png"
}


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
        mainElement.appendChild(initializeMenuPage(chickenPie, pies.name, pies.description))
        
    }else if(clickedElementId === 'contactTab'){
        const newElements = initializeContactPage()
        console.log(newElements)
        mainElement.appendChild(newElements)
    }
    return mainElement
}
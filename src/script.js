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

export const allPies = importPieImages(pieImages)
console.log(allPies)

const pies = [
    {
    "name": "Creamy Chicken ",
    "description": " A classic Australian chicken pie with a puff pastry top, showcasing a golden, flaky crust. Inside, a creamy filling of diced chicken, herbs, and mushrooms is encased, perfectly blending flavors and textures.",
    "image": "src/img/pieImgs/chickenPie.png"
    },{
    "name": "Chunky Steak & Pea",
    "description": " This pie features a rich, savory steak filling, made with tender chunks of steak, gravy, and diced vegetables. A slice is cut out, revealing the hearty inside, all encased in a golden puff pastry crust.",
    "image": "src/img/pieImgs/steakAndPeaPie.png"   
    },{
    "name": "Tuna Mornay",
    "description": "A delightful twist on the traditional tuna mornay, transformed into a pie with a flaky puff pastry crust. A slice is removed to display the creamy tuna, cheese, and vegetable filling, offering a glimpse of this comforting dish.",
    "image": "src/img/pieImgs/tunaMornay.png"   
    },{
    "name": "Shepards Pie",
    "description": "A traditional Shepherd's pie presented in a round baking dish. It has a savory minced lamb filling with onions, carrots, and peas, topped with a smooth layer of golden-brown mashed potatoes, lightly crisped, and garnished with fresh herbs.",
    "image": "src/img/pieImgs/shepardPie.png"   
    },
]

function createPieCards(pies){
    pies.forEach(pie => {
        let newPie = initializeMenuPage(chickenPie, pie.name, pie.description)
        return newPie
    })
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
        mainElement.appendChild(createPieCards(pies))
        
    }else if(clickedElementId === 'contactTab'){
        const newElements = initializeContactPage()
        mainElement.appendChild(newElements)
    }
    return mainElement
}
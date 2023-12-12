import vonWithPieImg from './img/vonWithPie1.png';
import { initializeMenuPage } from './menu';
import chickenPie from './img/chickenPie.png'
  
export function initializeHomePage(){

    // main 3 positions
    const mainElement = document.createElement('main'); 
    mainElement.id = 'main'
    
    const image = './img/chickenPie.png'
    const content = "A chicken pie is a comforting dish featuring tender chicken pieces, vegetables, and aromatic herbs in a creamy sauce, all encased in a flaky pastry crust. It's a classic comfort food loved for its rich flavors and contrasting textures."

    // Appending Main
    let mainContent = populateMain()
    mainElement.appendChild(mainContent.img);
    mainElement.appendChild(mainContent.content);

    return mainElement
};


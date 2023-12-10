import vonWithPieImg from './vonWithPie1.png';
import pieSVG from './pieTab.svg'
  
export function initializeContactPage(){
    // main 3 positions
    const headerElement = document.createElement('header');
    const mainElement = document.createElement('main');
    const footerElement = document.createElement('footer');

    // children for header
    const headingElement = document.createElement('h1');
    const tabList = document.createElement('ul');

    // Children for header tab list
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
   
    // Children for tabs
    function createTabImg(src){
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

    // Children for main
    const vonWithPieElement = new Image();
    const introductionElement = document.createElement('p');
    
    // Cdding content to main elements
    vonWithPieElement.src = vonWithPieImg;
    introductionElement.textContent = `Von can be contacted on: Shayayamayneyou aree getting a number`;


    // Appending Header
    headerElement.appendChild(headingElement);
    headerElement.appendChild(tabList);
    
    // Appending Main
    mainElement.appendChild(vonWithPieElement);
    mainElement.appendChild(introductionElement);

    return {
        header: headerElement,
        main: mainElement,
        footer: footerElement
    };
};



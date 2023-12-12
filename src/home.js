import vonWithPieImg from './img/vonWithPie1.png';
import pieSVG from './img/pieTab.svg'
import { contactPage, initializeContactPage } from './contact';
import { initializeMenuPage } from './menu';
  
export function initializeHomePage(){

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

    // Tab ID's
    tabList.id = 'tabs'
    homeTab.id = 'homeTab'
    menuTab.id = 'menuTab'
    contactTab.id = 'contactTab'
    console.log(contactTab.id)
    console.log(contactTab.id)

    // Add the class to each tab
    homeTab.classList.add('tab');
    menuTab.classList.add('tab');
    contactTab.classList.add('tab');
    
    tabList.addEventListener('click', (event) => {
        // Check if the clicked element is a tab
        const clickedTab = event.target.closest('li')
        const clickedElementId = clickedTab.id;
        if (clickedTab.classList.contains('tab')) {
            // let clickedElementId = event.currentTarget.id;
            let mainContent = populateMain(clickedElementId)
            mainElement.appendChild(mainContent.img);
            mainElement.appendChild(mainContent.content);
        }
    });
    
const image = './img/chickenPie.png'
const content = "A chicken pie is a comforting dish featuring tender chicken pieces, vegetables, and aromatic herbs in a creamy sauce, all encased in a flaky pastry crust. It's a classic comfort food loved for its rich flavors and contrasting textures."


    function populateMain (clickedElementId){
        // Clear main
        mainElement.innerHTML = '';
        // Children for main
        const vonWithPieElement = new Image();
        const mainTextElement = document.createElement('p');

        // Adding content to main elements
        vonWithPieElement.src = vonWithPieImg;

        if(clickedElementId === 'homeTab'){
            mainTextElement.textContent = `Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With the arrival of Von's Pies, the Dutch have been pleasantly ambushed by a whirlwind of flavors and food with actual texture, making many wonder how they ever settled for frikandel and herring.
            Each pie from Von's Pies is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's Pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of deepfried noodle blocks and potato. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples. 
            The variety at Von's Pies is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's Pies treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
            `;
        }else if(clickedElementId === 'menuTab'){
            initializeMenuPage(image, content)
            
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
    
    // Appending Main
    let mainContent = populateMain()
    mainElement.appendChild(mainContent.img);
    mainElement.appendChild(mainContent.content);

    return {
        header: headerElement,
        main: mainElement,
        footer: footerElement
    };
};


import './style.css'
import vonWithPieImg from './vonWithPie.png';
const contentElement = document.querySelector('#content')

  // Add the image to our existing div.
  
  
  function content(){
    // main 3 positions
    const headerElement = document.createElement('header')
    const mainElement = document.createElement('main')
    const footerElement = document.createElement('footer')

    // children for header
    const headingElement = document.createElement('h1')
    const tabList = document.createElement('ul')

    // Children for header tabs
    const homeTab = document.createElement('li')
    const menuTab = document.createElement('li')
    const contactTab = document.createElement('li')
    // Adding content to header elements
    headingElement.textContent = "Von's Pies"
    tabList.appendChild(homeTab)
    tabList.appendChild(menuTab)
    tabList.appendChild(contactTab)

    homeTab.textContent = 'Home'
    menuTab.textContent = 'Menu'
    contactTab.textContent = 'Contact'

    // Children for main
    const vonWithPieElement = new Image();
    const introductionElement = document.createElement('p')
    
    // Cdding content to main elements
    vonWithPieElement.src = vonWithPieImg;
    introductionElement.textContent = `Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With the arrival of Von's Pies, the Dutch have been pleasantly ambushed by a whirlwind of flavors and food with actual texture, making many wonder how they ever settled for frikandel and herring.
    Each pie from Von's Pies is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's Pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of deepfried noodle blocks and potato. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples. 
    The variety at Von's Pies is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's Pies treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
    In essence, Von's has introduced the Netherlands to a new culinary era, where pies are not just an afterthought but a main course. They have turned the humble pie into a culinary icon, challenging the traditional Dutch culinary landscape. As Von's continues to win hearts and stomachs, it's clear they're not just serving pies; they're serving a delicious slice of culinary revolution, seasoned with a hint of humor and a dash of daring. In a land known for its straightforward, no-nonsense food, Von's pies are a reminder that sometimes, it's okay to play with your food.</p>
`


    // Appending Header
    headerElement.appendChild(headingElement)
    headerElement.appendChild(tabList)
    
    // Appending Main
    mainElement.appendChild(vonWithPieElement)
    mainElement.appendChild(introductionElement)

    return {
        header: headerElement,
        main: mainElement,
        footer: footerElement
    };
}

let pageElements = content()
contentElement.appendChild(pageElements.header)
contentElement.appendChild(pageElements.main)
contentElement.appendChild(pageElements.footer)



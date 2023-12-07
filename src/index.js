import './style.css'
import vonWithPieImg from './vonWithPie.png';
const contentElement = document.querySelector('#content')

  // Add the image to our existing div.
  
  
  function populateMainPage(){
    // main 3 positions
    const headerElement = document.createElement('header')
    const mainElement = document.createElement('main')
    const footerElement = document.createElement('footer')

    // children for header
    const headingElement = document.createElement('h1')

    // adding content to header elements
    headingElement.textContent = "Von's Pies"

    // children for main
    const vonWithPieElement = new Image();
    const introductionElement = document.createElement('p')
    
    // adding content to main elements
    vonWithPieElement.src = vonWithPieImg;
    introductionElement.textContent = `Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With Von's arrival, the Dutch have been pleasantly ambushed by a whirlwind of flavors, making many wonder how they ever settled for just cheese and herring.

    Each pie from Von's is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of standard bread. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples.
    
    The variety at Von's is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
    
    In essence, Von's has introduced the Netherlands to a new culinary era, where pies are not just an afterthought but a main course. They have turned the humble pie into a culinary icon, challenging the traditional Dutch culinary landscape. As Von's continues to win hearts and stomachs, it's clear they're not just serving pies; they're serving a delicious slice of culinary revolution, seasoned with a hint of humor and a dash of daring. In a land known for its straightforward, no-nonsense food, Von's pies are a reminder that sometimes, it's okay to play with your food.</p>
`



    
      
    mainElement.appendChild(vonWithPieElement)

    return mainElement
}

contentElement.appendChild(populateMainPage())


{/* <main>
<p>Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With Von's arrival, the Dutch have been pleasantly ambushed by a whirlwind of flavors, making many wonder how they ever settled for just cheese and herring.

    Each pie from Von's is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of standard bread. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples.
    
    The variety at Von's is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
    
    In essence, Von's has introduced the Netherlands to a new culinary era, where pies are not just an afterthought but a main course. They have turned the humble pie into a culinary icon, challenging the traditional Dutch culinary landscape. As Von's continues to win hearts and stomachs, it's clear they're not just serving pies; they're serving a delicious slice of culinary revolution, seasoned with a hint of humor and a dash of daring. In a land known for its straightforward, no-nonsense food, Von's pies are a reminder that sometimes, it's okay to play with your food.</p>
</main> */}
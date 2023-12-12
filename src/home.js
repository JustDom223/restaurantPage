import vonWithPieImg from './img/vonWithPie1.png';
  
export function initializeHomePage(){
    // create main elements
    const mainElement = document.createElement('main'); 
    const mainContent = document.createElement('p')

    // adding tags to elements
    mainElement.innerHTML = ''
    mainElement.id = 'main'
    mainContent.id = 'mainContent'

    // filling elements
    mainContent.textContent = `Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With the arrival of Von's Pies, the Dutch have been pleasantly ambushed by a whirlwind of flavors and food with actual texture, making many wonder how they ever settled for frikandel and herring.
    Each pie from Von's Pies is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's Pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of deepfried noodle blocks and potato. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples. 
    The variety at Von's Pies is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's Pies treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
    `

    const vonWithPieElement = new Image()
    vonWithPieElement.src = vonWithPieImg

    
    // Appending Main
    mainElement.appendChild(vonWithPieElement);
    mainElement.appendChild(mainContent);

    return {
        frontImg: vonWithPieElement,
        content: mainContent,
    }
};


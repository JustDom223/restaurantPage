
const pies = {
    "name": "Steak Pie",
    "description": "Delish creamy chicken pie with perfect flaky puff pastry.",
    "image": "img/pieImgs/chickenPie.png"
}


export function initializeMenuPage(pieImg, pieName, pieCont){
    // create elements for Menupage
    
    const pieCardElement = document.createElement('div')
    const pieNameElement = document.createElement('h2')
    const pieImgElement = new Image()
    const pieDescElement = document.createElement('p')

    // Adding a class to the card
    pieCardElement.classList.add('pieCard')
    pieNameElement.classList.add('pieName')
    pieImgElement.classList.add('pieImg')
    // adding content to elements
    pieImgElement.src = pieImg;
    pieNameElement.innerHTML = pieName
    pieDescElement.innerHTML = pieCont;

    pieCardElement.appendChild(pieImgElement)
    pieCardElement.appendChild(pieNameElement)
    pieCardElement.appendChild(pieDescElement)

    return pieCardElement

};




// fetch('./pies.json')
//     .then(response => response.json())
//     .then(pies => {
//         pies.forEach(pie)
//     })
const image = './img/chickenPie.png'
const content = "A chicken pie is a comforting dish featuring tender chicken pieces, vegetables, and aromatic herbs in a creamy sauce, all encased in a flaky pastry crust. It's a classic comfort food loved for its rich flavors and contrasting textures."


export function initializeMenuPage(img, pieCont){

    // create elements for Menupage
    const pieCard = document.createElement('div')
    const pieImgElement = new Image()
    const pieDesc = document.createElement('p')
    // Adding a class to the card
    pieCard.classList.add('pieCard')
    pieImgElement.classList.add('pieImg')
    // adding content to elements
    pieImgElement.src = img;
    pieDesc.textContent = pieCont

    pieCard.appendChild(pieImgElement)
    pieCard.appendChild(pieDesc)

    return pieCard

};



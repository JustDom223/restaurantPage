fetch('./pies.json')
    .then(response => response.json())
    .then(pies => {
        pies.forEach(pie => {
            createPieCard(pie);
        });
    })
    .catch(error => console.error('Error loading pie data:', error));


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



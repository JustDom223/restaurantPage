import chickenPie from './img/pieImgs/chickenPie.png'
import shepardPie from './img/pieImgs/shepardPie.png'
import steakAndPeaPie from './img/pieImgs/steakAndPeaPie.png'
import tunaMornay from './img/pieImgs/tunaMornay.png'
import mexicanBeanPie from './img/pieImgs/mexicanBeanPie.png'

export function initializeMenuPage(){
    const pies = [
        {
        "name": "Creamy Chicken ",
        "description": " A classic Australian chicken pie with a puff pastry top, showcasing a golden, flaky crust. Inside, a creamy filling of diced chicken, herbs, and mushrooms is encased, perfectly blending flavors and textures.",
        "image": chickenPie
        },{
        "name": "Chunky Steak & Pea",
        "description": " This pie features a rich, savory steak filling, made with tender chunks of steak, gravy, and diced vegetables. A slice is cut out, revealing the hearty inside, all encased in a golden puff pastry crust.",
        "image": steakAndPeaPie   
        },{
        "name": "Tuna Mornay",
        "description": "A delightful twist on the traditional tuna mornay, transformed into a pie with a flaky puff pastry crust. A slice is removed to display the creamy tuna, cheese, and vegetable filling, offering a glimpse of this comforting dish.",
        "image": tunaMornay
        },{
        "name": "Shepards Pie",
        "description": "A traditional Shepherd's pie presented in a round baking dish. It has a savory minced lamb filling with onions, carrots, and peas, topped with a smooth layer of golden-brown mashed potatoes, lightly crisped, and garnished with fresh herbs.",
        "image": shepardPie
        },{
        "name": "Mexican Chilli Bean Pie",
        "description": "This delightful Mexican chili bean pie is served in a colorful ceramic dish, featuring a spicy filling of chili beans, bell peppers, onions, and corn in a tomato sauce. Topped with a golden cornbread crust, sprinkled with melted cheese and cilantro, it presents a perfect blend of flavors. The vibrant setting and Mexican-inspired decorations add to its festive appeal, making it a visually appealing and flavorful dish.",
        "image": mexicanBeanPie
        },
    ]
    const pieCards = pies.map(pie => {
        
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
        pieImgElement.src = pie.image;
        pieNameElement.innerHTML = pie.name
        pieDescElement.innerHTML = pie.description;
        
        pieCardElement.appendChild(pieImgElement)
        pieCardElement.appendChild(pieNameElement)
        pieCardElement.appendChild(pieDescElement)
        
        return pieCardElement
    })
    return pieCards



};


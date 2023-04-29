// let cardsArray = [
//     {
//         'name': 'CSS',
//         'img': 'http://thapatechnical.online/logos/css.png',
//     },
//     {
//         'name': 'HTML',
//         'img': 'http://thapatechnical.online/logos/html5.png',
//     },
//     {
//         'name': 'jQuery',
//         'img': 'http://thapatechnical.online/logos/jquery.png',
//     },
//     {
//         'name': 'JS',
//         'img': 'http://thapatechnical.online/logos/js.png',
//     },
//     {
//         'name': 'Node',
//         'img': 'http://thapatechnical.online/logos/nodejs.png',
//     },
//     {
//         'name': 'Python',
//         'img': 'http://thapatechnical.online/logos/python.png',
//     }
// ];

// //reference for card section
// const parentDiv = document.querySelector('#card-section'); 

//  //Step 2 --> to duplicate cards 
// const gameCard = cardsArray.concat(cardsArray);
// console.log(gameCard)


// //Step 3 -->  Note that this method creates a new shuffled array instead of modifying the original one.

// // const myNumbers = (array) => {
// //     for(let i = array.length -1; i>0 ; i--){
// //         let j = Math.floor(Math.random() * (i+1))

// //         let temp = array[i];
// //         array[i] = array[j];
// //         array[j] = temp;
// //     }
// // }

// // const shuffledChild = myNumbers(gameCard)

// //using short(sort) code

// let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// //step5 --> adding counter for choosing cards at one time
// let clickCount  = 0;

// let firstCard = "";
// let secondCard = "";

// //styling the match card --> part of step 6
// const card_matches = () => {
//     let card_selected = document.querySelectorAll('.card_selected');

//     card_selected.forEach((curElem) => {
//         curElem.classList.add('card_match')
//     })
// }

//step 7 --> tocontinue all the game till all matches made
// const resetGame = () => {
//     //emptying the both cards and making count 0
//     firstCard = "";
//     secondCard = ""; 
//     clickCount = 0;

//     let card_selected = document.querySelectorAll('.card_selected');

//     card_selected.forEach((curElem) => {
//         curElem.classList.remove('.card_selected')
//     })
// }

//step 4 -->  adding a css class to show selected cards
// parentDiv.addEventListener('click', (event) => {
//     let curCard = event.target;
//     if(curCard.id === "card-section") {return false}

//     clickCount++;
//     if(clickCount < 3){
        
//         if(clickCount === 1){
//             //parent node because card is of parent div
//             firstCard = curCard.parentNode.dataset.name;
//             curCard.parentNode.classList.add('card_selected'); 
//         }else{
//             secondCard = curCard.parentNode.dataset.name;
//             curCard.parentNode.classList.add('card_selected'); 
//         }

//         if(firstCard !== "" && secondCard !== ""){
//             if(firstCard === secondCard){

//                 //Step 8 --> to delaying in showing the matched cards
//                setTimeout(() =>{ 
//                 card_matches() //first we are adding cardmatch
//                 resetGame() //on matching we continue 
//                }, 1000)
//             }else{
//                 setTimeout(() =>{
//                     resetGame() //on matching we continue 
//                    }, 1000)
//             }
//         }
    
//     }
// })

 //Step 1 -->  to add the card
 //first using game cards array then gamecard then shuffled child
//  for(let i=0; i<shuffledChild.length; i++){

//         const childDiv = document.createElement('div')
//         childDiv.classList.add('card')
//         childDiv.dataset.name = shuffledChild[i].name;
//         // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    
//         const front_div = document.createElement('div');
//         front_div.classList.add('front-card')
    
//         const back_div = document.createElement('div');
//         back_div.classList.add('back-card')
    
//         back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;
    
//         parentDiv.appendChild(childDiv)
    
//         childDiv.appendChild(front_div)
//         childDiv.appendChild(back_div)
//     }

let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}



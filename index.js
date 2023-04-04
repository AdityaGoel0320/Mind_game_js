let box = document.getElementById("box")
let shuffled_array = [
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
    },
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


let fnc = (shuffled_array) => {
    for (let i = shuffled_array.length - 1; i > 0; i--) {

        // generating random number
        let j = Math.floor(Math.random() * (i + 1));
        // swapping shuffled_array[i] and shuffled_array[j]
        let c = shuffled_array[i];
        shuffled_array[i] = shuffled_array[j];
        shuffled_array[j] = c;
    }
    return shuffled_array;
}
let shuffled_shuffled_arrayay = fnc(shuffled_array);

// step    to give class styles to clicked boxes
let click_counter = 0;
let firstCard = "";
let secondCard = "";
box.addEventListener("click", (event) => {
    let currentCard = event.target;
    click_counter++;
    if (click_counter <= 2) {
        if (click_counter === 1) {
            firstCard = currentCard.dataset.name;
            currentCard.classList.add("selected_card")

        } else {
            secondCard = currentCard.dataset.naem;
            currentCard.classList.add("selected_card")

        }

        if (firstCard != null && secondCard != null) {
            if (firstCard === secondCard) {
                currentCard.classList.add("correctSelected")
            }
        }

    }

    if(currentCard.id==="box"){
        return false ; 
    }

})

for (let i = 0; i <= shuffled_array.length - 1; i++) {
    let child_box = document.createElement("div")
    child_box.classList.add("childbox")
    child_box.style.backgroundImage = `url(${shuffled_array[i].img})`
    // box.appendChild(child_box)
    box.appendChild(child_box)
}


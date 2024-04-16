const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector('main');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    main.style.backgroundColor = colors[randomNumber]; // Update main background color
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

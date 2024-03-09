const board = document.querySelector('#board');
const width = window.innerWidth;
const colors = ['IndianRed','LightCoral','Salmon','DarkSalmon','LightSalmon','Crimson','Red','FireBrick','DarkRed','LawnGreen','Lime','LimeGreen','PaleGreen','LightGreen','MediumSpringGreen','SpringGreen','MediumSeaGreen','SeaGreen','ForestGreen','Green','DarkGreen','YellowGreen','OliveDrab','Olive','DarkOliveGreen','MediumAquamarine','DarkSeaGreen','LightSeaGreen','DarkCyan','Teal','LightSalmon','Coral','Tomato','OrangeRed','DarkOrange',	'Orange','LightSkyBlue',	'DeepSkyBlue',	'DodgerBlue',	'CornflowerBlue',	'MediumSlateBlue',	'RoyalBlue',	'Blue','Plum',	'Violet',	'Orchid',	'Fuchsia',	'Magenta',	'MediumOrchid','MediumPurple','BlueViolet','DarkViolet','DarkOrchid','DarkMagenta','Purple','Gold','Yellow','LightYellow'];
let SQUARES_NUMBER = 0
if(width < 500) {
    SQUARES_NUMBER = 200
} else {
    SQUARES_NUMBER = 700
}
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    square.addEventListener('touchmove ', () => setColor(square));
    square.addEventListener('touchend ', () => removeColor(square));
    board.append(square);
}

function setColor(element) {
    const color = randomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    element.style.transform = 'scale(1.2)';
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d, 0 0 0px #1d1d1d`;
    element.style.transform = 'scale(1)';
}

function randomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
// start of the app
const appContainer = document.querySelector('.app-container');
const clearButton = document.querySelector('.clear');
const rgbButton = document.querySelector('.rgb-color');
let rgbColor = false;
let innerDivs;


// function to create a divs for the grids
function makeDivs(gridNum = 16) {
    let totalDivs = gridNum * gridNum;
    appContainer.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
    appContainer.style.gridTemplateRows = `repeat(${gridNum}, auto)`;
    for (let i = 1; i <= totalDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', changeBackground);
        appContainer.appendChild(div);
    }
}

function clearDivs() {
    let appContainerDivs = appContainer.querySelectorAll('div');
    appContainerDivs = Array.from(appContainerDivs);
    appContainerDivs.forEach(div => {
        appContainer.removeChild(div);
    })
}

function changeBackground(e) {

    if(rgbColor) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        e.target.style.backgroundColor = color;
        return;
    }

    e.target.style.backgroundColor = 'black';
}

makeDivs();


// event listeners
rgbButton.addEventListener('click', () => {
    rgbColor = true;
})

clearButton.addEventListener('click', () => {
    const sketchDivs = appContainer.querySelectorAll('div');
    sketchDivs.forEach(sketchDiv => {
        sketchDiv.style.backgroundColor = "white";
    })
    let userNumber = prompt('Number of squares per side? **Maximum is 100** ');
    // modified the app-container to reflect the user entered number;
    userNumber = Number(userNumber);

    if(userNumber === 0 || userNumber === NaN) {
        return;
    } else {
        clearDivs();
        makeDivs(userNumber);
    }

});

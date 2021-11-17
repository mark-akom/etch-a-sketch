// start of the app
const appContainer = document.querySelector('.app-container');
const clearButton = document.querySelector('.clear')
// function to create a divs for the grids
function makeDivs() {
    let totalDivs = 16 * 16
    for (let i = 1; i <= totalDivs; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid purple';
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        appContainer.appendChild(div);
    }
}

makeDivs();

clearButton.addEventListener('click', () => {
    const sketchDivs = appContainer.querySelectorAll('div');
    sketchDivs.forEach(sketchDiv => {
        sketchDiv.style.backgroundColor = "white";
    })
    const userNumber = prompt('Number of squares per side? **Maximum is 100** ');
})
// start of the app
const appContainer = document.querySelector('.app-container');

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
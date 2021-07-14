const trTable = document.querySelector('tr');

function criaTd() {
    // codigo de criar cor aleatoria pego no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript 
    function gerar_cor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        
        return `rgb(${r}, ${g}, ${b} )`;
     }
    
    for (let index = 0; index < 6; index += 1) {
        const tdTable = document.createElement('td');
        tdTable.className = 'ball';
        tdTable.style.backgroundColor = gerar_cor();
        trTable.appendChild(tdTable);
     }
}


function addDinamicNumber() {
    let mathRandom = Math.random() * 6;
    mathRandom = Math.floor(mathRandom);

    const trChild = trTable.children;
    const rgbColor = document.getElementById('rgb-color');
    rgbColor.innerText = window.getComputedStyle(trChild[mathRandom]).backgroundColor;
}


criaTd();
addDinamicNumber();
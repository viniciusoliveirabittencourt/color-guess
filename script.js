const trTable = document.querySelector('tr');
const ball = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');

// codigo de criar cor aleatoria pego no site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript 
function gerar_cor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgb(${r}, ${g}, ${b} )`;
 }

function criaTd() {
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
    trChild[mathRandom].classList.add('correct');
    rgbColor.innerText = window.getComputedStyle(trChild[mathRandom]).backgroundColor;
}


function clikOnBall() {
    for (let index = 0; index < ball.length; index += 1) {
        ball[index].addEventListener('click', function () {
            if (ball[index].classList.contains('correct')) {
                answer.innerText = 'Acertou!';
            } else {
                answer.innerText = 'Errou! Tente novamente!';
            }
        });
    }
}


criaTd();
addDinamicNumber();
clikOnBall();

document.getElementById('reset-game').addEventListener('click', function () {
    for (let index = 0; index < ball.length; index += 1) {
        if (ball[index].classList.contains('correct')) {
            ball[index].classList.remove('correct');
        }
        ball[index].style.backgroundColor = gerar_cor();
    }
    addDinamicNumber();
    clikOnBall();
    answer.innerText = 'Escolha uma cor';
});
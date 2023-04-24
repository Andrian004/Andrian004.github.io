const compValue = document.querySelector('.container .comp .comp-value');
const playerPoint = document.querySelector('.score .player-point');
const comPoint = document.querySelector('.score .comp-point');
const info = document.querySelector('.hasil');

// Computer choice
const getPilihanComputer = () => {
    const comp = Math.random();
    if(comp < 0.34) return 'batu';
    if(comp >=0.34 && comp < 0.67) return 'kertas';
    return 'gunting';
}

// Player choice
const getHasil = (comp, player) => {
    if(player == comp) return 'seri';
    if(player == 'batu') return (comp == 'gunting') ? 'win' : 'lose';
    if(player == 'kertas') return (comp == 'gunting') ? 'lose' : 'win';
    if(player == 'gunting') return (comp == 'batu') ? 'lose' : 'win';
}

// Animation
const animation = () => {
    const text = ['batu', 'gunting', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if(new Date().getTime() - waktuMulai > 1000) return clearInterval;
        compValue.innerHTML = text[i++];
        if(i == text.length) i = 0;
    }, 100);
}

// Main Program
const choice = document.querySelectorAll('.your-input li');
let cWin = 0;
let pWin = 0;

choice.forEach(function (c) {
    c.addEventListener('click',function () {
        removeClass();
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = c.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        c.classList.add('active');
        animation();

        setTimeout(function a () {
            compValue.innerHTML = pilihanComputer;
            info.innerHTML = hasil;
            score(hasil);
            bg();
        }, 1000);
    })
})

// Score
function score(hsl) {
    if(hsl != 'seri')(hsl == 'win')? pWin++ : cWin++;
    return (hsl == 'win')? playerPoint.innerHTML = pWin : comPoint.innerHTML = cWin;
}

// Background
function bg() {
    if (pWin == cWin) return document.body.style.backgroundColor = '#fff';
    return (pWin > cWin)? document.body.style.backgroundColor = '#c0ffc0' : 
                          document.body.style.backgroundColor = '#ffbcbc';
}

// Reset
function rst() {
    removeClass();
    pWin = 0;
    cWin = 0;
    playerPoint.innerHTML = pWin;
    comPoint.innerHTML = cWin;
    info.innerHTML = '-';
    compValue.innerHTML = '';
    document.body.style.backgroundColor = '#fff';
}

function removeClass() {
    choice.forEach(function (e) {
        e.classList.remove('active');
    })
}

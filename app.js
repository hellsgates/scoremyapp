const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#resetButton')
let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
const winningScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if(!isGameOver) {
        p1Score += 1;
    }
    if(p1Score === winningScore) {
        isGameOver = true 
        p1.classList.add('winner')
        p2.classList.add('loser')
    } 
    p1.textContent = p1Score;

})

p2Button.addEventListener('click', function () {
    if(!isGameOver) {
        p2Score += 1;
    }
    if(p2Score === winningScore) {
        isGameOver = true 
        p1.classList.add('loser')
        p2.classList.add('winner')
    } 
    p2.textContent = p2Score;

})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset()
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('winner', 'loser')
    p2.classList.remove('winner', 'loser')
}

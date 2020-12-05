let username = document.getElementById('username');
let saveScoreBtn = document.getElementById('saveScoreBtn');
let newScore = localStorage.getItem('newScore');
let finalScore = document.getElementById('finalScore');

let highscores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highscores);

finalScore.innerText = newScore

username.addEventListener('keyup', () => {
});



saveHighScore = e => {

    e.preventDefault();
    
    const score = {
        score: newScore,
        name: username.value
    };

    highscores.push(score);

    localStorage.setItem('highScores', JSON.stringify(highscores));
}
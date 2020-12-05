const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem(highScores)) || [];

highScoresList.innerHTML = highScores
highScores.map( score => {
    return <li class="high-score">$(score.name)-$(score.name)</li>;
})
.join("");
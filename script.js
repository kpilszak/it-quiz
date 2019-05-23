var showAnswersButton = document.getElementById('check');

var points = 0;

var correct = document.querySelectorAll('input.correct');
console.log(correct);

var answerCheckboxes = document.querySelectorAll('input');
console.log(answerCheckboxes);

function addPoints() {
    this.classList.add('selected');
    if (this.classList.contains('correct')) {
        points += 1;
    }
}

for (var i = 0; i < answerCheckboxes.length; i++) {
    answerCheckboxes[i].addEventListener('click', addPoints);
}

var correctAnswersToPick = document.querySelectorAll('input.correct + span');

showAnswersButton.addEventListener('click', () => {
    showAnswers();
    showCorrectlyPicked();
});

function showAnswers() {
    for (var i = 0; i < answerCheckboxes.length; i++) {
        if(answerCheckboxes[i].classList.contains('selected') && answerCheckboxes[i].classList.contains('correct')) {
            answerCheckboxes[i].classList.add('greatAnswer');
        }
    }
}

var correctAnswers = document.getElementsByClassName('greatAnswer');

function showCorrectlyPicked() {
    for (var i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].getElementsByTagName("span").style.color = "blue";
    }
}
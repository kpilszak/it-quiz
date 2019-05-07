var points = 0;

var correct = document.querySelectorAll('.correct');
console.log(correct);

var answerCheckboxes = document.getElementsByTagName('input');
console.log(answerCheckboxes);

function addPoints() {
    this.classList.add('selected');
    if (this.classList.contains('correct')) {
        points += 1;
    }
}

for (var i = 0; i < answerCheckboxes.length; i++) {
    answerCheckboxes[i].addEventListener("click", addPoints);
}
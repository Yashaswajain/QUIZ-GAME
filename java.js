var totalScore = 0;
function calculate() {
    totalScore = totalScore + 1;
    console.log(totalScore);
}
function negative() {
    totalScore = totalScore - 1;
    console.log(totalScore);
}
function show() {
    document.getElementById("print").innerHTML = "Your total score is:" + totalScore;
    
}

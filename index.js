// Your Code Here
let userName = window.prompt ('Please enter your name:')
let userScore = 0

function playGame() {
for(let x = 0; x < questions.length; x++) {
    let question = questions[x]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
userScore = userScore + 10
    }
}
window.alert('Your score is: '+userScore)
}
playGame()
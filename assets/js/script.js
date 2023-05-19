// Get DOM elements
const startQuizBox = document.getElementById("startQuizBox");
const quizQuestionsContainer = document.getElementById("quizQuestionscontainer");
const endQuizContainer = document.getElementById("endtheQuizContainer");
const resultLabel = document.getElementById("resultLabel");
let score = 0;

// Add event listeners
document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("submitYourscorebutton").addEventListener("click", submitScore);
document.getElementById("restartThequizbutton").addEventListener("click", restartQuiz);

// Questions array (example question)
const questions = [
  {
    question: "Question 1",
    answers: [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4"
    ],
    correctAnswer: 2
  }
];

let currentQuestionIndex = 0;

// Start the quiz
function startQuiz() {
  startQuizBox.style.display = "none";
  quizQuestionsContainer.style.display = "block";
  showQuestion();
}

// Show the current question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionHeadline = document.getElementById("questionHeadline");
  const answerButtons = document.getElementsByClassName("answer");

  questionHeadline.textContent = currentQuestion.question;

  for (let i = 0; i < answerButtons.length; i++) {
    const answerButton = answerButtons[i];
    answerButton.textContent = currentQuestion.answers[i];
    answerButton.addEventListener("click", checkAnswer);
  }
}

// Check the selected answer
function checkAnswer(event) {
  const selectedAnswer = event.target;
  const selectedAnswerIndex = Array.from(selectedAnswer.parentNode.children).indexOf(selectedAnswer);
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswerIndex === currentQuestion.correctAnswer) {
    score++;
    resultLabel.textContent = "Correct!";
    resultLabel.style.color = "green";
  } else {
    resultLabel.textContent = "Wrong!";
    resultLabel.style.color = "red";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// End the quiz
function endQuiz() {
  quizQuestionsContainer.style.display = "none";
  endQuizContainer.style.display = "block";
  document.getElementById("youScoredheader").textContent = "Congratulations! You Scored: " + score;
}

// Submit the score
function submitScore() {
  const highScoreName = document.getElementById("highetsScoreName").value;
  const highScoreEntry = highScoreName + ": " + score;
  const highScoreList = document.getElementById("thehighestScorelist");
  const newScoreEntry = document.createElement("li");
  newScoreEntry.textContent = highScoreEntry;
  highScoreList.appendChild(newScoreEntry);

  restartQuiz();
}

// Restart the quiz
function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  endQuizContainer.style.display = "none";
  startQuizBox.style.display = "block";
}

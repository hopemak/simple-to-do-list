// Quiz Questions
const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: 2
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HighText Machine Language", "Hyper Tool Multi Language"],
    correct: 1
  },
  {
    question: "What year was JavaScript created?",
    answers: ["1990", "1995", "2000", "2005"],
    correct: 1
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const btns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

// Load Question Function
function loadQuestion() {
  resetButtons();

  let q = questions[index];
  questionEl.textContent = q.question;

  btns.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.onclick = () => checkAnswer(i);
  });
}

// Reset button styles
function resetButtons() {
  btns.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

// Check Answer
function checkAnswer(selected) {
  let correctIndex = questions[index].correct;

  if (selected === correctIndex) {
    btns[selected].classList.add("correct");
    score++;
  } else {
    btns[selected].classList.add("wrong");
    btns[correctIndex].classList.add("correct");
  }

  btns.forEach(btn => btn.disabled = true);
}

// Next Button
nextBtn.onclick = () => {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

// Results screen
function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

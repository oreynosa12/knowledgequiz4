const quizData = [
  {
    question: "What does HTML stand for?",
    a: "High Times Miller Light",
    b: "Hello World",
    c: "Hyper Text Markup Language",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was HTML released?",
    a: "2002",
    b: "1998",
    c: "1985",
    d: "1996",
    correct: "d",
  },

  {
    question: "What does CSS stand for?",
    a: "Center Standard Style",
    b: "Cascading Style Sheets",
    c: "Computer Syntax Standard",
    d: "All of the above",
    correct: "b",
  },
  {
    question: " What year was javascript released?",
    a: "1998",
    b: "1996",
    c: "1999",
    d: "None of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const currentQuiz = 0;
const score = 0;

startquiz();

function startquiz() {
  deselectAnswers();

  let currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
  let answerEls;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      startquiz();
    } else {
      quiz.innerHTML = (
        <h2>
          {" "}
          You answered ${score}/${quizData.length} questions correct!{" "}
        </h2>
      );

      <button onclick="location.reload()">Reload</button>;
    }
  }
});

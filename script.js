// Select buttons and score display
const nextBtn = document.getElementById('nextbtn');
const previousBtn = document.getElementById('previousbtn');
const quizButtons = document.getElementById('quizButtons');
const scoreDisplay = document.getElementById('scoreDisplay');

// Create subject buttons
const mathBtn = document.createElement('button');
mathBtn.textContent = 'Math';
mathBtn.id = 'mathbtn';

const bioBtn = document.createElement('button');
bioBtn.textContent = 'Biology';
bioBtn.id = 'biobtn';

quizButtons.appendChild(mathBtn);
quizButtons.appendChild(bioBtn);

// Questions
const mathQuestions = [
  { question: 'What is 15 * 10?', answer: '150' },
  { question: 'What is 105 / 5?', answer: '21' },
];

const bioQuestions = [
  { question: 'Orange is what type of fruit?', answer: 'berry' },
  { question: 'Coconut is what type of fruit?', answer: 'drupe' },
];

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Elements for displaying questions
const questionBox = document.createElement('h2');
document.body.insertBefore(questionBox, nextBtn);

// Function to display a question
function showQuestion() {
  if (currentIndex < currentQuestions.length) {
    questionBox.textContent = currentQuestions[currentIndex].question;
    scoreDisplay.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  } else {
    questionBox.textContent = `🎯 Quiz Completed! Your final score is ${score}/${currentQuestions.length}`;
    scoreDisplay.textContent = '';
  }
}

// Function to handle answering a question
function answerQuestion() {
  const userAnswer = prompt('Enter your answer:').trim().toLowerCase();
  const correctAnswer = String(currentQuestions[currentIndex].answer).toLowerCase();
  if (userAnswer === correctAnswer) {
    alert('✅ Correct!');
    score++;
  } else {
    alert(`❌ Wrong! The correct answer is ${currentQuestions[currentIndex].answer}`);
  }
  currentIndex++;
  showQuestion();
}

// Event listeners for subjects
mathBtn.addEventListener('click', function () {
  currentQuestions = mathQuestions;
  currentIndex = 0;
  score = 0;
  showQuestion();
});

bioBtn.addEventListener('click', function () {
  currentQuestions = bioQuestions;
  currentIndex = 0;
  score = 0;
  showQuestion();
});

// Next and previous navigation
nextBtn.addEventListener('click', function () {
  if (currentQuestions.length === 0) {
    alert('Select a subject first!');
    return;
  }
  if (currentIndex < currentQuestions.length) {
    answerQuestion();
  } else {
    alert('Quiz already completed!');
  }
});

previousBtn.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  } else {
    alert('No previous question!');
  }
});
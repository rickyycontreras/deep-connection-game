/*
 * Simple logic for the Deep Connection Game.
 * Handles audience selection and random question generation.
 */

// Question bank organized by audience category.
const questions = {
    friends: [
          "What is your favorite memory that we share?",
          "If you could travel anywhere with me, where would we go?",
          "What do you admire most about our friendship?",
          "How do you define a true friend?",
          "What is something you'd like us to do together that we haven't done yet?",
          "What quality do you value most in a friend?"
        ],
    lovers: [
          "What do you love most about our relationship?",
          "How do you feel most appreciated or loved by me?",
          "What goal would you like us to accomplish together?",
          "What adventure do you dream of taking with me?",
          "What does intimacy mean to you?",
          "What is your favorite memory of us?"
        ],
    family: [
          "What family tradition do you cherish the most?",
          "How has our family shaped who you are today?",
          "What is one of your proudest family moments?",
          "What is something you learned from our parents?",
          "What does family support look like to you?",
          "What is your favorite holiday memory with our family?"
        ],
    coworkers: [
          "What motivates you to do your best at work?",
          "Which skill would you like to develop in your role?",
          "How do you like to be appreciated for your efforts?",
          "What is your biggest professional achievement so far?",
          "What makes for a great team environment in your opinion?",
          "Which project have you enjoyed working on the most?"
        ]
  };

let currentCategory = null;

// Initialize event listeners once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('#category-select button');
    categoryButtons.forEach(button => {
          button.addEventListener('click', () => {
                  currentCategory = button.getAttribute('data-category');
                  showQuestion();
                });
        });
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', showQuestion);
  });

// Display a random question from the selected category.
function showQuestion() {
    if (!currentCategory) return;
    const categoryQuestions = questions[currentCategory];
    if (!categoryQuestions || categoryQuestions.length === 0) return;
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    const question = categoryQuestions[randomIndex];
    document.getElementById('question-text').textContent = question;
    // Switch screens: hide selection, show question.
  document.getElementById('category-select').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
  }


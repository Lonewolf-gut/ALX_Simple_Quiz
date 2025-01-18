// Define the checkAnswer function
function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Retrieve the user’s selected answer
  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  // Check if an answer was selected
  if (!userAnswer) {
    document.getElementById("feedback").textContent =
      "Please select an answer before submitting.";
    return;
  }

  // Compare the user’s answer with the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

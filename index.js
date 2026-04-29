// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById("textInput");
  const textInputDisplay = document.getElementById("textInputDisplay");

  textInputDisplay.textContent = `You typed: ${textInput.value}`;
}

// Attach Event Listeners
function setupEventListeners() {
  // Change background color on click
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);

  // Reset background color on double-click
  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  // Display key press
  document.addEventListener("keydown", displayKeyPress);

  // Display user input as they type
  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
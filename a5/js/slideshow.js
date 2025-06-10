var myImages = [
  "https://c02.purpledshub.com/uploads/sites/62/2022/11/A-spotted-hyena-laughing-00105b7.jpg?w=1456&webp=1",
  "https://www.planetcustodian.com/wp-content/uploads/2021/05/Beautiful-Pictures-of-Animals-in-Love.jpg",
  "https://static.boredpanda.com/blog/wp-content/uploads/2016/01/funny-animals-eating-32__605.jpg",
  "https://delavanlakesvet.com/wp-content/uploads/sites/195/2022/03/smiling-cat-for-web.jpg",
  "https://onthepulsenews.com/wp-content/webp-express/webp-images/uploads/2021/06/CrystalsHoneyInc-73589-stronges-family-bonds-image1.jpg.webp"
];


var captionImages = [
  "A spotted hyena with wide-open jaws, head tilted back, appearing to laugh.",
  "Two bobcats nuzzle each other affectionately in a sun-dappled, green, grassy field.",
  "A small, gray squirrel sitting upright, diligently eating a piece of yellow corn.",
  "A fluffy, short-haired orange tabby cat looking directly at the camera with an open-mouthed smile.",
  "A group of elephants, including a calf, walking together across an open, dry landscape, showing strong familial bonds."
];

var index = 0;
var timerInterval; // to store Id for clearing
var currentCountdown = 4; // initial countdown value
const SLIDESHOW_DURATION = 4;

// get elements
var slideshowImage = document.getElementById("slideshow");
var captionParagraph = document.getElementById("caption");
var timerDisplay = document.getElementById("timerDisplay");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");
var autoCheckbox = document.getElementById("auto");

// Function to update the displayed image and caption
function updateImage() {
  slideshowImage.src = myImages[index];
  slideshowImage.alt = captionImages[index];
  captionParagraph.textContent = captionImages[index];
  resetTimer(); // Resets the timer whenever the image updates
}

// Function to advance to the next image
function next() {
  if (myImages.length === index + 1) { // Strict equality check
    index = 0; // Loop back to the first image if at the end
  } else {
    index++;
  }
  updateImage(); // Updates the image and resets the timer
}

// Function to go back to the previous image
function back() {
  if (index === 0) {
    index = myImages.length - 1; // Loops to the last image if at the beginning
  } else {
    index--;
  }
  updateImage(); // Updates the image and resets the timer
}

// Function to decrement the countdown and trigger image change
function updateCountdown() {
  currentCountdown--;
  timerDisplay.textContent = currentCountdown;

  if (currentCountdown <= 0) {
    clearInterval(timerInterval); // Stop the current countdown
    next(); // Move to the next image (this will call updateImage, which then calls resetTimer)
  }
}

// Function to start or restart the 1-second countdown interval
function startTimer() {
  clearInterval(timerInterval); // Clear any existing timer to prevent multiple timers
  currentCountdown = SLIDESHOW_DURATION; // Reset countdown value to the full duration
  timerDisplay.textContent = currentCountdown; // Update display immediately to full duration
  timerInterval = setInterval(updateCountdown, 1000); // Start new interval
}

// Function to reset the automatic slideshow timer
function resetTimer() {
  clearInterval(timerInterval); // Always clear the existing interval first
  if (autoCheckbox.checked) {
    startTimer(); // If auto is checked, start a fresh timer
  } else {
    // If auto is not checked, just reset the display to the initial value
    currentCountdown = SLIDESHOW_DURATION;
    timerDisplay.textContent = currentCountdown;
  }
}

// Function to handle the "Run automatically" checkbox state
function autoSlide() {
  if (autoCheckbox.checked) {
    resetTimer(); // If checked, ensure the timer is running/restarted
  } else {
    // If unchecked, stop the timer and reset countdown display
    clearInterval(timerInterval);
    currentCountdown = SLIDESHOW_DURATION;
    timerDisplay.textContent = currentCountdown;
  }
}

// --- Event Listeners ---
previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);
autoCheckbox.addEventListener("change", autoSlide, false);

// --- Initial Setup ---
// Display the first image and set its initial alt/caption.
// This also calls resetTimer(), which will start the timer if the checkbox is checked.
updateImage();
// This ensures the auto-slide state is correctly initialized on page load
// based on the 'checked' attribute in the HTML.
autoSlide();

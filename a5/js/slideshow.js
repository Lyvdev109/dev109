var myImages =["https://c02.purpledshub.com/uploads/sites/62/2022/11/A-spotted-hyena-laughing-00105b7.jpg?w=1456&webp=1",
               "https://www.planetcustodian.com/wp-content/uploads/2021/05/Beautiful-Pictures-of-Animals-in-Love.jpg",
               "https://static.boredpanda.com/blog/wp-content/uploads/2016/01/funny-animals-eating-32__605.jpg",
               "https://delavanlakesvet.com/wp-content/uploads/sites/195/2022/03/smiling-cat-for-web.jpg",
               "https://onthepulsenews.com/wp-content/webp-express/webp-images/uploads/2021/06/CrystalsHoneyInc-73589-stronges-family-bonds-image1.jpg.webp"
              ];


var captionImages =["A Hyena laughing",
                    "A moment of love between bobcats",
                    "A squirral enjoying lunch",
                    "A cat being happy",
                    "A family of elephants"
                   ];

var index=0;
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


 function updateImage(){
  slideshowImage.src = myImages[index];
  slideshowImage.alt = captionImages[index];
  captionParagraph.textContent = captionImages[index];
  resetTimer();
 } 

function next(){
 if (myImages.length == index+1) {
 index=0;
 } else {
 index++;
 }
 updateImage();
} 
 

function back(){
 if (index===0) {
  index = myImages.length-1;
 } else {
 index--;
 }
 updateImage();
} 

 function updateCountdown () {
   currentCountdown--;
   timerDisplay.textContent = currentCountdown;
   if (currentCountdown <= 0) {
     clearInterval(timerInterval);
     next();
   }
 }

function startTime() {
  clearInterval(timerInterval);
  currentCountdown = SLIDESHOW_DURATION;
  timerDisplay.textContent = currentCountdown;
  timerInterval = setInterval (updateCountdown, 1000);
}

function resetTimer () {
  clearInterval(timerInterval);
  if (autoCheckbox.checked) {
   // only restat of timer is on auto
    startTimer();
  } else {
   // if auto is not selected
    currentCountdown = 4;
    timerDisplay.textContent = currentCountdown;
  }
}

function autoSlide () {
  if (autoCheckbox.checked) {
    resetTimer();
  } else {
    clearInterval (timerInterval);
    currentCountdown = SLIDESHOW_DURATION;
    timerDisplay.textContent = currentCountdown;
  }
}
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
autoCheckbox.addEventListener("change", autoSlide, false);

 // initial setup
updateImage();
autoSlide();




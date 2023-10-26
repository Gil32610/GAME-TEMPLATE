let password = generatePassword();
const guessesList = document.getElementById("guessesList");
const userInput = document.getElementById("passwordInput");
const button = document.getElementById("button");
const firstH1 = document.getElementById("first");
const fences = document.getElementById("animals_display");
var currentGuess = null;
const resetButton = document.createElement("button");
resetButton.innerHTML = "Jogar Novamente";
var currentPlay = 1;
// const list = document.createElement("ol");
//list.setAttribute("id", "list");
//guessesList.appendChild(list);
var attempts;
console.log(guessesList);


const checkPositions = (guess) => {
  fences.innerHTML="";
  const userPassword = guess.toString();
  console.log(password);
  let cows = 0;
  let bulls = 0;
  for (i = 0; i < password.length; i++) {
    if (userPassword.charAt(i) == password.charAt(i)) {
      bulls++;
    }

    if (
      userPassword.charAt(i) != password.charAt(i) &&
      password.includes(userPassword.charAt(i))
    ) {
      cows++;
    }
  }
  //const currentNumber = document.createElement("li");
  const paragraph = document.createElement("p");
  updateBulls(bulls, paragraph);
  updateCows(cows, paragraph);
  //guessesList.appendChild(paragraph);
  console.log(guessesList);
  attempts = currentPlay++;

  if (bulls == 4) {
    button.disabled = true;
    resetGame();
  }
};

const updateCows = (cows, paragraph) => {
  for(let i = 0; i<cows; i++){
    createCows();
  }
  //paragraph.appendChild(document.createTextNode(`Number of cows is ${cows}`));
};

const updateBulls = (bulls, paragraph) => {
 for(let i =0; i<bulls; i++){
  console.log(i);
  createDinosaur();
 }
  //paragraph.appendChild(document.createTextNode(`Number of bulls is ${bulls}`));
 // const breakLine = document.createElement("br");
 // paragraph.append(breakLine);
};

function generatePassword() {
  var password = "";
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var firstIndex = Math.floor(Math.random() * 9) + 1;
  var firstValue = getDigit(digits, firstIndex);
  password += firstValue;
  let i = 1;
  while (i <= 3) {
    index = randomize();
    if (digits[index] != -1) {
      password += getDigit(digits, index);
      i++;
    }
  }
  console.log(password);
  return password;
}

const updateCurrentGuess = () => {
  currentGuess = userInput.value;
  checkPositions(currentGuess);
};

button.onclick = () => {
  console.log("BUTTON WAS CLICKED");
  console.log(userInput.value);
  updateCurrentGuess();
};

const resetGame = () => {
  const message = document.createElement("h2");
  message.innerHTML = "You Won!";
  const totalAttempts = document.createElement("h3");
  totalAttempts.innerHTML = `Took you ${attempts} attempts to finish.`;
  guessesList.appendChild(message);
  guessesList.appendChild(totalAttempts);
  guessesList.appendChild(resetButton);
  currentPlay = 1;
};

resetButton.onclick = () => {
  password = generatePassword();
  guessesList.innerHTML = "";
  list.innerHTML = "";
  guessesList.appendChild(list);
  button.disabled = false;
};

function getDigit(digits, index) {
  const value = digits[index];
  digits[index] = -1;
  return value;
}
function randomize() {
  return Math.floor(Math.random() * 9);
}

function createDinosaur(){
  
  const dinosaur = document.createElement("img");
  dinosaur.style.position = "absolute";
  dinosaur.style.top = randint(0,200) + "px";
  dinosaur.style.left = randint(0,470)+"px"
  dinosaur.setAttribute("height","50px");
  dinosaur.setAttribute("width","auto");
  dinosaur.setAttribute("position","absolute");
  dinosaur.setAttribute("src","/Assets/images/Dinosaur.webp");
  dinosaur.setAttribute("class","dino");
  fences.appendChild(dinosaur);
}
function createCows(){
  
  const dinosaur = document.createElement("img");
  dinosaur.style.position = "absolute";
  dinosaur.style.top = randint(0,200) + "px";
  dinosaur.style.left = randint(0,470)+"px"
  dinosaur.setAttribute("height","50px");
  dinosaur.setAttribute("width","auto");
  dinosaur.setAttribute("position","absolute");
  dinosaur.setAttribute("src","/Assets/images/Brown_Cow.webp");
  fences.appendChild(dinosaur);
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
userInput.addEventListener("input",function(){
  let value = passwordInput.value;
            

  const uniqueDigits = new Set(value);
  const isValid = value.length === 4 && uniqueDigits.size === 4;
  button.disabled = !isValid;
});


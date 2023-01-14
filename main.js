const typingText = document.querySelector(".typing-text p"),
  inputField = document.querySelector(".input-field"),
  mistakeTag = document.querySelector(".mistake span"),
  timeTag = document.querySelector(".time span b"),
  wpmTag = document.querySelector(".wpm span"),
  cpmTag = document.querySelector(".cpm span"),
  button = document.querySelector(".content button");
let charIndex = (mistakes = 0);
let timer,
  maxTime = 60;
timeleft = maxTime;
isTyping = false;

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphs[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inputField.focus());
  typingText.addEventListener("click", () => inputField.focus());
}
randomParagraph();

inputField.oninput = () => {
  let typedChar = inputField.value.split("")[charIndex];
  const characters = typingText.querySelectorAll("span");
  if (charIndex > characters.length - 1 && timeleft > 0) {
    if (!isTyping) {
      timer = setInterval(() => {
        if (timeleft > 0) {
          timeleft--;
          timeTag.textContent = timeleft;
        } else {
          clearInterval(timer);
        }
      }, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      charIndex--;
      if (characters[charIndex].classList.contains("wrong")) {
        mistakes--;
      }
      characters[charIndex].classList.remove("wrong", "correct");
      characters[charIndex + 1].classList.remove("active");
    } else {
      if (characters[charIndex].innerText.toLowerCase() === typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        characters[charIndex].classList.add("wrong");
        mistakes++;
      }
      charIndex++;
    }
    
    characters[charIndex].classList.add('active')
    characters[charIndex-1].classList.remove('active')
    mistakeTag.textContent = mistakes
}
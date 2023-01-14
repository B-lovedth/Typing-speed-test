const typingText = document.querySelector(".typing-text p"),
  inputField = document.querySelector(".input-field"),
  mistakeTag = document.querySelector(".mistake span")
let charIndex = mistakes = 0;

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


inputField.oninput=()=>{
    let typedChar = inputField.value.split("")[charIndex]
    const characters = typingText.querySelectorAll('span')
    if(typedChar == null){
        charIndex--
        characters[charIndex].classList.remove('wrong','correct')
        characters[charIndex+1].classList.remove('active')

    }else{
        if(characters[charIndex].innerText.toLowerCase() === typedChar){
            characters[charIndex].classList.add('correct')
        }else{
            characters[charIndex].classList.add('wrong')
            mistakes++
            mistakeTag.textContent = mistakes
        }
        charIndex++
    }
    
    characters[charIndex].classList.add('active')
    characters[charIndex-1].classList.remove('active')
}
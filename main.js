const typingText = document.querySelector(".typing-text p"),
  inputField = document.querySelector(".input-field");
let charIndex = 0;

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphs[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inputField.focus());
  document.addEventListener("click", () => inputField.focus());
}
randomParagraph();

inputField.oninput=()=>{
    let typedChar = inputField.value.split("")[charIndex]
    const characters = typingText.querySelectorAll('span')
    console.log(characters[charIndex])
    if(characters[charIndex].innerText.toLowerCase() === typedChar){
        characters[charIndex].classList.add('correct')
    }else{
        characters[charIndex].classList.add('wrong')
    }
    charIndex++
}
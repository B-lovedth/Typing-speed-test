const typingText = document.querySelector(".typing-text p"),
  inputField = document.querySelector(".input-field");

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
    const characters = typingText.querySelectorAll('span')
    console.log(characters)
}
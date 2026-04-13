'use strict';
const input = document.getElementById('Enword');
const typingButton     = document.getElementById('typing');
const words            =["banana", "apple", "orange"];
let currentWord        = "";
let isPlaying          = false
input.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Enter" && !isPlaying) {
      startGame();
    }
  });

  function startGame() {
    isPlaying = true;
    nextWord ();
  }
  function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("target").textContent = currentWord;
    input.value = "";
    input.focus();
  }
  
  input.addEventListener("keydown", (event) => {
if (!isPlaying) return;

if (event.key === "Enter") {
  if (input.value === currentWord) {
    nextWord();
  } else {
    alert("ミス！");
  }
}
  }
  )
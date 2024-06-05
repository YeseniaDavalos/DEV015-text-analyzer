import analyzer from './analyzer.js';

const wordCount = document.querySelector('[data-testid="word-count"]'); 
const characterCount = document.querySelector('[data-testid="character-count"]'); 
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]'); 
const averageWordLength = document.querySelector('[data-testid="word-length-average"]'); 
const numberSum = document.querySelector('[data-testid="number-sum"]');
const numberCount = document.querySelector('[data-testid="number-count"]'); 
const textArea = document.querySelector('[data-testid="text-input"]'); 
const resetButton = document.getElementById('reset-button');

textArea.addEventListener("input", updateMetrics); 

function updateMetrics() {  
  const text = textArea.value;
  wordCount.textContent = "Palabras: " + analyzer.getWordCount(text); 
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
  averageWordLength.textContent = "Promedio longitud: " + analyzer.getAverageWordLength(text);
  numberSum.textContent = "Suma números: " + analyzer.getNumberSum(text);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(text);
}

resetButton.addEventListener("click", resetMetrics); 

function resetMetrics() { 
  textArea.value = ""; 
  updateMetrics();  
}











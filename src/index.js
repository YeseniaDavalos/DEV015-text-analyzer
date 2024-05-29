/*import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// CAPTURAR EL TEXTO INGRESADO
// 1. SELECCIONAR EL ELEMENTO (TEXTAREA)
// 2. EJECUTAR UN EVENTO EN EL TEXTAREA 
// 3. OBTENER EL TEXTO

// 1 => SELECTORES DEL DOM

const cajaTxt = document.querySelector("textarea")
// console.log(cajaTxt);

//2. => MANEJADOR DE EVENTOS

cajaTxt.addEventListener("input", function(){
    // console.log("Ok textarea");
    // 3. value
    const texto = cajaTxt.value;
    //console.log(texto);
    // 4. ENVIAR VALOR AL **OBJETO** ANALYZER
analyzer.getWordCount(texto) // argumento

    
})
 */

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











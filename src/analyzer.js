const analyzer = {
  getCharacterCount: (text) => {  
    return text.length;  
  },

  getCharacterCountExcludingSpaces: (text) => {
    const textWithoutSpaces = text.replace(/[^a-zA-Z0-9]/g, ''); 
    return textWithoutSpaces.length; 
  },

  getAverageWordLength: (text) => {  
    const words = text.trim().split(/\s+/); 
    if (words.length === 0 || words[0] === '') return 0; 
    let sumChars = 0; 
    for (let i = 0; i < words.length; i++) { 
      sumChars += words[i].length; 
    }
    const average = sumChars / words.length; 
    return Number(average.toFixed(2)); 
  },


  getNumberCount: (text) => {
    const obtainNumbers = text.match(/\b\d+(\.\d+)?\b/g);
    return obtainNumbers ? obtainNumbers.length : 0;
  },

  getNumberSum: (text) => {
    const obtainNumbers = text.match(/\b\d+(\.\d+)?\b/g); 
    if (obtainNumbers) { 
      let sumNumbers = 0;
      for (let i = 0; i < obtainNumbers.length; i++) {   
        sumNumbers += Number(obtainNumbers[i]); 
      }
      return sumNumbers;  
    }
    return 0;
  },

  getWordCount: (text) => {
    const words = text.trim().split(/\s+/); 
    if (words.length === 1 && words[0] === '') return 0;
    return words.length; 
  }
};

export default analyzer;

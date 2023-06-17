/*function countWordsAndVowels(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
  
      if (char === ' ' && i !== sentence.length - 1 && sentence[i + 1] !== ' ') {
        wordCount++;
      }
    }
  
    
    wordCount++;
  
    return { wordCount, vowelCount };
  }
  
  
  const sentence = "This is an example sentence.";
  const counts = countWordsAndVowels(sentence);
  
  console.log("Word count:", counts.wordCount);
  console.log("Vowel count:", counts.vowelCount);
*/
function sumOfDistinctElements(set1, set2) {
  const distinctElements = [];

  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i]) && !distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
    }
  }

  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i]) && !distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }

  return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const sum = sumOfDistinctElements(set1, set2);

console.log("Sum of distinct elements:", sum);

/**************************************************************checkpoint 1**********************************************************************
function countWordsAndVowels(sentence) {
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
*****************************************************************checkpoint 2*************************************************************

// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length.");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}

// Algorithm to determine if vectors are orthogonal
function determineOrthogonality(vectors) {
  const results = [];
  for (let i = 0; i < vectors.length; i++) {
    const v1 = vectors[i][0];
    const v2 = vectors[i][1];
    const dotProductResult = dotProduct(v1, v2);
    const isOrthogonal = dotProductResult === 0;
    results.push(isOrthogonal);
  }
  return results;
}

// Example usage
const vectors = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ], // Not orthogonal (dot product is not zero)
  [
    [1, -1, 2],
    [2, 2, 1],
  ], // Not orthogonal (dot product is not zero)
  [
    [1, 0, 0],
    [0, 1, 0],
  ], // Orthogonal (dot product is zero)
];

const orthogonalResults = determineOrthogonality(vectors);
console.log(orthogonalResults); // Output: [false, false, true]
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const arr = [5, 2, 9, 1, 3];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 9]*/

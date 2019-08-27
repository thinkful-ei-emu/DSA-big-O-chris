// 1. What is the Big O for this?
//     1) Determine the Big O for the following algorithm: 
//     You are sitting in a room with 15 people. You want to 
//     find a playmate for your dog, preferably of the same breed. 
//     So you want to know if anyone out of the 15 people have the 
//     same breed as your dog. You stand up and yell out, who here 
//     has a golden retriever and would like to be a playdate for 
//     my golden. Someone yells - "I do, be happy to bring him over"
//          O(1)

//     2) Determine the Big O for the following algorithm: You are 
//     sitting in a room with 15 people. You want to find a playmate 
//     for your dog who is of the same breed. So you want to know if
//     anyone out of the 15 people have the same breed as your dog. 
//     You start with the first person and ask him if he has a golden 
//     retriever. He says no, then you ask the next person, and the 
//     next, and the next until you find someone who has a golden or 
//     there is no one else to ask.
//          O(n)


// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
  if (value % 2 == 0) { // O(1)
    return true; // O(1)
  }
  else { // O(1)
    return false; // O(1)
  }
}
//          O(1) changing the input doesn't change the function length

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) { // O(n)
    const el1 = arr1[i]; // O(1)
    for (let j = 0; j < arr2.length; j++) { // O(n) but nested in another O(n)
      const el2 = arr2[j]; // O(1)
      if (el1 === el2) return true; // O(1)
    }
  }
  return false;
}
//          O(n^2) longer arrays increases each for loops length. they are also nested

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) { // O(n)
    array[i] *= 2; // O(1)
  }
  return array;// O(1)
}
//          O(n)

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) { // O(n)
    if (array[i] === item) { // O(1)
      return i; // O(1)
    }
  }
}
//          O(n)

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for(let j = i + 1; j < arr.length; j++) { // O(n)
      console.log(arr[i] + ', ' +  arr[j] ); // O(1)
    }
  }
}


// 7. Compute the sequence
// What does the following algorithm do? What is its 
// runtime complexity? Explain your answer

function compute(num) {
  let result = []; // O(1)
  for (let i = 1; i <= num; i++) { // O(n)

    if (i === 1) { // O(1)
      result.push(0); // O(1)
    }
    else if (i == 2) { // O(1)
      result.push(1); // O(1)
    }
    else { // O(1)
      result.push(result[i - 2] + result[i - 3]); // O(n)
    }
  }
  return result; // O(1)
}
//          compute(4) -> result = [0, 1, 1, 2] it's the fibranacci sequence starting with 1
//          O(n^2)


// 8. An efficient search
// In this example, we return to the problem of searching 
// using a more sophisticated approach than in naive search, 
// above. Assume that the input array is always sorted. What 
// is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
  let minIndex = 0; // O(1)
  let maxIndex = array.length - 1; // O(1)
  let currentIndex; // O(1)
  let currentElement; // O(1)

  while (minIndex <= maxIndex) { // O(logn)
    currentIndex = Math.floor((minIndex + maxIndex) / 2); // O(1)
    currentElement = array[currentIndex]; // O(1)

    if (currentElement < item) { // O(1)
      minIndex = currentIndex + 1; // O(1)
    } // O(1)
    else if (currentElement > item) { // O(1)
      maxIndex = currentIndex - 1; // O(1)
    } // O(1)
    else { // O(1)
      return currentIndex; // O(1)
    }
  }
  return -1;
}
//          O(log n) currentIndex gets halfed each run of the while loop


// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// O(1) it does the same every time and doesn't depend on size


// 10. What Am I?
// What does the following algorithm do? What is the Big O of 
// the following algorithm? Explain your answer

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
// this tests  for if a number is prime or not
// O(n) worst case, the function enters the for loop
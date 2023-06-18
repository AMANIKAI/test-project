
function solution(A) {
    // Remove negative numbers and zero from the array
    A = A.filter(num => num > 0);
  
    // If there are no positive numbers left, return 1
    if (A.length === 0) {
      return 1;
    }
  
    // Create a set of unique positive numbers
    const numSet = new Set(A);
    console.log(numSet)
    // Find the smallest positive integer that does not occur in A
    let smallestMissing = 1;
    while (numSet.has(smallestMissing)) {
      smallestMissing++;
    }
  
    console.log (smallestMissing);
  }

  solution([3, 6, 4, 2])


  
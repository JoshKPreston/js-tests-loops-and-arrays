// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  let numArray = new Array()
  for (let i = 1; i <= num; i++) {
    numArray.push(i)
  }

  let total = numArray[0]
  numArray.forEach(elem => {total *= elem})
  return total
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  let min = null
  let max = null

  if (n1 < n2) {
    min = n1
    max = n2
  } else {
    min = n2
    max = n1
  }

  let numArray = new Array()
  for (let i = min; i <= max; i++) {
    numArray.push(i)
  }

  let total = null
  for (let i = 0; i < numArray.length; i++) {
    const elem = numArray[i];
    total += elem
  }
  return total
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  let numArray = new Array()
  for (let i = start; i <= end; i++) {
    numArray.push(i)    
  }
  let divisibleNums = 0
  numArray.forEach(elem => {
    if (elem % divisor == 0) {
      divisibleNums++
    }
  });
  return divisibleNums
}

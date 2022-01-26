function hasTargetSum(array, target) {
  // Write your algorithm here
  numbers = {};
  for (let i = 0; i < array.lenght; i +=1)  {
      let diff = target - array[i];

        if (numbers[diff] !== undefined && numbers[diff]  !== i) {
          return true
        }else return false 

  }

} 



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create object of array 
  loop through array for elements do math 4 target
  if target exists w/ math on array. return true else return false 
  */ 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

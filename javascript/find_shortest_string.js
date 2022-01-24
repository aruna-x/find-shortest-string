function findShortestString(arr) {
  let res = arr[0];
  for(let i=0; i<arr.length; i++){
    res = res.length > arr[i].length ? arr[i] : res;
    // if (res.length > arr[i].length){
    //   res = arr[i];
    // }
  }
  return res;
}

/**
 * Alternatively, can just store index num and return arr[num].
 * Makes no difference for space or time complexity though.
 */


if (require.main === module) {

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'solo'");
  console.log("=>", findShortestString(['solo']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

/**
 * 1. paraphrase
 * 
 * Array of strings (min length 1), return first shortest string.
 * 
 * 2. tests
 * 
 * ['a']
 * 
 * 3. pseudocode solution
 * 
 * var to hold string res takes the first one automatically
 * for each successive string from array, compares length
 * if shorter, replace with shorter. Else move on to next string to compare.
 * 
 * 4. code (above)
 * 5. refactor (above)
 * 6. optimize
 * 
 */

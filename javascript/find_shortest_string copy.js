function findShortestString(arr) {
  // let shortest = arr[0];
  // arr.forEach((str)=>{
  //   if (str.length < shortest.length) {
  //     shortest = str;
  //   }
  // })

  // return shortest;

  return arr.reduce((prev, next) => next.length < prev.length ? next : prev);
}

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
}

module.exports = findShortestString;

/**
 * let shortest = [index, string]
 * traverse the array looking for it. Do not store elements that match current shortest.
 */

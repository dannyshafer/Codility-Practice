// PSEUDOCODE: 
// the two inputs are 1) an array of numbers that tell where leaves fall each second and 2) the distance the frog has to go
// the output is how many seconds it will take for a completed path to appear
// if there is no path then it returns -1
// what we're looking for ultimately is: how many indexes through the array does it take to get all the numbers from 1 to X
// we need to make the path from 1 to X 
// we need to make a list of the earliest seconds where each leaf falls

function solution(X, A) {
  var leaves = [];
  var result = -1;

  for(var i = 0; i < A.length; i++) {
    if(typeof leaves[A[i]] == 'undefined') {
      // this sets the first instance where a given leaf is dropped
      leaves[A[i]] = i;
    }
  }

  if(leaves.length <= X) {
    return -1;
  }

  for(var i = 1; i <= X; i++) {
    if(leaves[i] == 'undefined') {
      return -1;
    } else {
      result = Math.max(result, leaves[i]);
    }
    // this loop checks to see if each the leaves in the path from 1 to X exist. if it does then go on to the one and if not then return -1
    // we do math.max because it tells which is the higher time-number second
  }

  return result;
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
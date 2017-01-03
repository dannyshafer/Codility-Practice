function solution(A) {
    var lowest = A[0];
    var occurrence = {};
    A.forEach(function(i){
        if(i < lowest){ lowest = i; }
        if(occurrence[i] === undefined) {
            occurrence[i] = 1;
        } else {
            return 0;
        }
    });
    // write your code in JavaScript (Node.js 6.4.0)
    // console.log(occurrence);
    Object.keys(occurrence).forEach(function(i) {
        console.log(i);
        // console.log(parseInt(i) + 1);
        // console.log(occurrence[parseInt(i)];
    });
    // console.log(Object.keys(occurrence)[0]);
    return;
}

// PSEUDOCODE:
// Input is an array of numbers
// Output is either 1 or 0 depending on if the array is a permutation or not
// "Permutation" means that the numbers together form a sequence of 1 to N of each number only once
// We could use an occurrence hash and then check that each only occurs once. 
// We also need to save the lowest value and then check that that exists and then increment up one each time to make sure that each of those exists. 
// If the occurrence hash already contains a value, then it should return 0 because it isn't a permutation.
// If the occurrence hash doesn't contain a value then it should be added. 
// The initial loop shoudld also check to see if the value of the current element is less than the current lowest and if so, reset the lowest variable to the value of the current element.
// PSEUDOCODE:
// Input is an array of numbers
// Output is either 1 or 0 depending on if the array is a permutation or not
// "Permutation" means that the numbers together form a sequence of 1 to N of each number only once
// We need to get the total of what the array should be if it's got all the numbers from 1 to N
// We can then subtract each element and then the remainder will be the missing element
// If there isn't any remainder, then it is a permutation and so we can return 1
// Otheriwse it isn't a permutation and we can return 0

function solution(A) {
    var length = A.length;
    var sum = length * (length + 1) / 2;
    for(i in A) {
        sum -= A[i];
    }
    if(sum === 0) {
        return 1;
    } else {
        return 0;
    }
}

solution([1,2,3,5]);
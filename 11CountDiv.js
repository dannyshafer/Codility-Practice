function solution(A, B, K) {
    var range = [];
    var result = 0;
    for(var i = A; i <= B; i++) {
        range.push(i);
    }
    
    for(var i = 0; i < range.length; i++) {
        if(range[i] % K === 0) {
            result++;        
        }
    }
    return result;
}

// PSEUDCODE:
// inputs are three numbers: A, B, and K. A and B make a range of numbers. K is the number that each number in the range will be divided by 
// output is the count of numbers in the range A..B that are evenly divisible by K
// we'll need a variable for all the numbers from A to B
// we'll also need a container variable that will be incremented up by one each time an evenly divisible number is found
// loop through each element in the range array and check if a given element is divisible by K
    // in this case, the math is i % K === 0 
    // if the remainder is 0, then increment the result number up by one
// outside the loop, return the result variable
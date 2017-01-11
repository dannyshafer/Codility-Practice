function solution(A) {    
    var nums = {};
    var lowest = 1;
    
    for(var i=0; i<A.length; i++) {
        if(A[i] > 0) {
            nums[A[i]] = true;
        }
    }
    
    if(!nums[lowest]) return 1;
    while(nums[lowest]) {
        lowest++;
    }
    return lowest;
}

// PSEUDOCODE:
// input is an array of numbers
// output is a single number that is the one missing from the array
// we need to figure out how to see which one is missing
// loop through and make an occurrence hash where each number is set to true
// then loop to make sure 1 exists, the lowest number and if so then add one and loop again. break if it doesn't exist and return that number because it's the missing one
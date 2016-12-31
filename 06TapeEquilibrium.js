// PESUDOCODE:
// Write a function that finds the smallest difference between two sides of a tape, which is an array of numbers.
// The right side of the tape is subtracted from the left. 
// The value of the selected index is added to the left. 
// Input is an array of numbers.
// Output is the value of the smallest difference between left and right. 
// We need a loop that gives each value in the array the opportunity to be the dividing point between left and right. 
// We need a way to add the values in the left and the values in the right and subtract those sums from each other. 

function solution(A) {
    if((A === undefined) || (A === [])) { return; };
    var initial = A.slice(1, (A.length - 1));
    var smallest = Math.abs(A[0] - initial.reduce(add, 0));
    for (var i = 0; i < A.length - 1; i++){
        var left = A.slice(0, (i + 1));
        var leftSum = left.reduce(add, 0)
        var right = A.slice((i + 1), (A.length));
        var rightSum = right.reduce(add, 0);        
        if(Math.abs(leftSum - rightSum) < smallest) {
            smallest = Math.abs(leftSum - rightSum);
        };
    };
    return smallest;
}

function add(a, b) {
    return a + b;
}

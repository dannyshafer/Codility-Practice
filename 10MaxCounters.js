// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    var highest = 0;
    var results = new Array(N);
    results.fill(0);
    for(var i = 0; i < A.length; i++) {
        console.log(results[A[i]]);
        // results[A[i]];
        if(results[A[i]] > highest) { highest = results[A[i]]; }
    }
    // console.log(results);
    return results;
}

// PSEUDOCODE:
// two inputs. 1) an array A and an integer N. the array will become the incrementation instructions that we use and the integer will be the length of a new array that we execute some instructions on.
// output is the array we create during the process of all the inputs given from A
// we'll need to create the result array to start off with. it is N digits long and initialize with the value 0
// we'll need to take note of the largest item on the board at a time and be updating it constantly
// loop through array A and depending on what the value is, increment the result's value at the index signified by the value in the input array or increment all of the values if the value at A[i] is greater than the results array can accomodate.

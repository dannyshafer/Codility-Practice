// PSEUDOCODE:
// Write a function that takes an array and rotates it a give number of times
// Two inputs: array and number of times to rotate
// Output: the rotated array
// It would be cool to have an escape for some of the common edge cases like if someone passes an empty array or nothing at all. 
// Rotate means to take last element off the end and put it on the front of the array. 
// We have to figure out two things, first, how to rotate an array and second, how to do that the number of times that is getting passed.
// The loop part is easier because you can just make a block that runs that particular number of times that gets passed. 
// The rotate needs a couple things:
// 	First, it removes from the end and stores it as a placeholder varaiable which can be used subsequently. 
// 	Second, it pushes that value onto the front of the array. 
// Lastly, the solution function returns the completed array. 

function solution(A, K) {
    if((A === undefined) || (K === undefined) || (A === [])) { return; };
    while(K--) {
        var placeholder = (A.pop());
        A.unshift(placeholder);
    }
    return A;
}

solution([1,2,3,4,5], 3);
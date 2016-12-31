// PSEUDOCODE:
// Write a function that tells the number of "jumps" required of a frog that desires to travel from one point to another going some number of steps between.
// Three inputs: all integers, start point, end point, and distance per hop. 
// One output: an integer of how many hops 
// Time and space complexity O(1), which means just one calculation for the whole thing.
// The distance travelled is Y - X.
// Thus, the number of hops is (Y - X)/D.
// We need to round up because he can only make complete hops.

function solution(X, Y, D) {
	console.log(Math.ceil((Y-X)/D));
    return Math.ceil((Y-X)/D);
}

solution(1,4,2) // 2
solution(10,100,10) // 9
solution(10,387412983471928374192834,678453) // 571024055420093060
// PSEUDOCODE: 
// Write a function that takes an array of sequential numbers and returns the one that is missing.
// One input: an array of numbers
// Output: a number
// There should be something to escape edge cases like someone passes an empty array or nothing.
// Create an occurrence hash of all the elements in the array
// Loop through each element and see if the value plus one exists in the occurence hash. If it does, then go to the next one. If it does not then that is the missing value. 
// The exception is that the highest value plus one will not exist in the hash so that has to be escaped. 

function findMissing(A){
	if((A === undefined) || (A === [])) { return; };
	var occurrence = {};
	var highest = 0;
	A.forEach(function(i){
		if(i > highest) {
			highest = i;
		};
		occurrence[i] = i;
	});
	A.forEach(function(i){
		if((occurrence[i + 1] === undefined) && (occurrence[i] !== highest)) {
			console.log(i + 1);
			return (i + 1);
		} 
	});
}


findMissing([10,9,8,6,5,4,3,2,1]);
findMissing([1,2,3,4,5,6,8,9,10]);
findMissing([1,10,2,9,3,8,4,6,5]);
// PSEUDOCODE:
// Write a function that takes an array and finds the one that doesn't show up twice. 
// One input: an array of numbers
// Output: a number 
// There should also be some escapes to take care of edge cases like if someone passes something other than an array, or an array, or nothing at all. 
// We need to make an occurrence hash which will show how many times some number shows up. 
// We then need to go through each of the numbers and for each one, add it to the occurence hash with an occurence of one. 
// But if it already exists in the hash, we can delete the record entirely beause the full pair will have been accounted before. 
// The only value left in the occurence hash by the end is the answer because it's the only one that was added and not removed later. 

function solution(A) {
    if((A === undefined) || (typeof A !== "object") || (A === [])) { return; };
    var occurrences = {};
    A.forEach(function(i){
        if(occurrences[i] === undefined) {
            occurrences[i] = 1;
        } else {
            delete occurrences[i];
        }
    });
    return parseInt(Object.keys(occurrences)[0]);
}
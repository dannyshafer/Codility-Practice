function solution(A) {
    var result = 0;
    for(var i = 0; i < A.length; i++) {
        if(A[i] === 0){
            result += helper(A[i], A.slice((i+1), A.length));
            if(result >= 1000000000){return -1;}
        }        
    }
    return result;
}

function helper(current, subsequent) { // (0, [1,0,1,1])
    var passes = 0;
    for(var i = 0; i < subsequent.length; i++) {
        if(current !== subsequent[i]) { passes++; }
    }
    return passes;
}

// PESUDOCODE:
// input is an array of numbers filled with 1s and 0s. 
// output is the count of times that a car passes one that is going in the opposite directions. in this case, it is signified by a current digit and it's subsequent digits that are the opposite of the current. 1 and 0 are "opposites". 
// so for example if there is a 1 and then a 0, that is one instance of cars "passing each other"
// we need to loop through each of the elements in the array and compare them to the subsequent ones only
    // if the subsequent one is opposite, then increment the "passes" variable by one
// finally, return the "passes" variable

// PSEUDOCODE for the helper method:
// inputs are the value of the current index and an array of all the elements subsequent to it in the original array
// output is the count of "passes" that happen
    
function solution(A) {
    if((A === undefined) || (typeof A !== "object") || (A === [])) {
        return;
    };
    // write your code in JavaScript (Node.js 6.4.0)
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
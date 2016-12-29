function solution(A) {
    if((A === undefined) || (typeof A !== "object") || (A === [])) {
        return;
    };
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
function solution(A, K) {
    if((A === undefined) || (K === undefined) || (A === [])) {
        return;
    };
    while(K--) {
        var placeholder = (A.pop());
        A.unshift(placeholder);
    }
    return A;
}
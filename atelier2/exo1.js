function numAverage(moyenne) {
    let s = 0;
    let M;
    for (let i = 0; i < moyenne.length; i++){
        s = s + moyenne[i];
        M = s / moyenne.length;
    }
    return M;
}
tab = [5, 1, 1, 1, 5];
console.log(numAverage(tab));
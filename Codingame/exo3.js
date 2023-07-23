function sortNumbers(tInit, tInf, tSup) {
    for (let i = 0; i < tInit.length; i++) {
      const num = tInit[i];
      if (num < 10) {
        tInf.push(tInit.splice(i, 1)[0]);
        i--;
      } else {
        tSup.push(tInit.splice(i, 1)[0]);
        i--;
      }
    }
}
  
const tInit = [5, 15, 8, 12, 3, 20];
const tInf = [];
const tSup = [];
  
sortNumbers(tInit, tInf, tSup);
  
console.log("tInit :", tInit);
console.log("tInf :", tInf);
console.log("tSup :", tSup);
  
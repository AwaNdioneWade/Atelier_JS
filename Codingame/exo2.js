function initXY(X, Y) {
    const numObjets = 20;
    const espaceX = 40;
    const espaceY = 30;
  
    const posX = [X];
    const posY = [Y];
  
    for (let i = 1; i < numObjets; i++) {
      posX.push(X + i * espaceX);
      posY.push(Y + i * espaceY);
    }
  
    return { posX, posY };
}
  
const abscisse = 100;
const ordonnee = 200;
const { posX, posY } = initXY(abscisse, ordonnee);
  
console.log("abscisse:", posX);
console.log("ordonnée:", posY);
  
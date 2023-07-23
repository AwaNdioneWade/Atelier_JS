const calculMoyen = (moyens) => {

  if(moyens.length === 0) {
    return 0;
  }
    
  let somme = 0;
  for (let moyen of moyens) {
    somme += moyen;
  }
  return somme / moyens.length;
  
  }
   
let epiosde1 = [10, 3, 9];
let epiosde2 = [1, 2, 3, 4];
let epiosde3 = [];

const moyepisode1 = calculMoyen(epiosde1);
const moyepisode2 = calculMoyen(epiosde2);
const moyepisode3 = calculMoyen(epiosde3);
  
document.querySelector('#episode1Moyenn').innerText = moyepisode1.toFixed(1) + ' de votes';
document.querySelector('#episode2Moyenn').innerText = moyepisode2.toFixed(1) + ' de votes';
document.querySelector('#episode3Moyenn').innerText = moyepisode3.toFixed(1) + ' de votes';

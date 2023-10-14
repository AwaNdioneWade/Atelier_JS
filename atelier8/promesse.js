const division = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b !== 0) {
            return resolve(a + ' / ' + b + ' = ' + a / b)
        }
        reject('Le diviseur doit etre différent de 0')
    })
}

division(10, 0).then(res => {
    console.log((res));
}).catch(err => {
    console.error(err);
})   


const multiplication = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a != 0 || b != 0) {
        resolve(a + ' * ' + b + ' = ' + a * b);
      } else {
        reject('Les nombres doit etre différent de zéro');
      }
    });
  }

  multiplication(30, 9).then(res => {
    console.log((res));
}).catch(err => {
    console.error(err);
})   


const soustraction = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a > b) {
        resolve(a + ' - ' + b + ' = ' + a - b);
      } else {
        reject('Le premier nombre doit etre supérieur au deuxieme');
      }
    });
  }

  soustraction(3, 9).then(res => {
    console.log((res));
}).catch(err => {
    console.error(err);
})   

  

const addition = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a != 0 || b != 0) {
        let resutat = a + b
        resolve(a + ' + ' + b + ' = ' + resutat);
      } else {
        reject('Ecrivez un nombre différent de zéro');
      }
    });
  }

  addition(30, 9).then(res => {
    console.log((res));
}).catch(err => {
    console.error(err);
})   
const billInput = document.getElementById('bill');
const boutons = document.querySelectorAll('button');
const custom = document.getElementById('custom');
const labelPoeple = document.querySelector('.people');
const labelPoepleErreur = document.querySelectorAll('.people .erreur');
const inputPeople = document.getElementById('numberPeople');
const tipAmount = document.querySelector('.tipAmount');
const total = document.querySelector('.total');
const reset = document.getElementById('reset');

let bill = 0;
let tipAmountPourcent = 0;
let numberPeople = 0;

function calculate() {
    if (numberPeople !== 0) {
        tipAmount.innerText = '$' + bill * (tipAmountPourcent / 100) / numberPeople.toFixed(2);
        total.innerText = '$' + bill / numberPeople.toFixed(2);
    }
}

billInput.addEventListener('input', function(e){
    bill = + e.target.value;
    calculate();
});

boutons.forEach((button) => {
    button.addEventListener('click', function(){
        if (button.classList.contains('active')) {
            boutons.forEach((button) => button.classList.remove('active'))
            tipAmountPourcent = 0;
        }else{
            boutons.forEach((button) => button.classList.remove('active'))
            button.classList.add('active')
            tipAmountPourcent = + button.value
        }
        calculate();
    })
})

custom.addEventListener('input', function(e){
    tipAmountPourcent = + e.target.value;
    calculate();
})

inputPeople.addEventListener('input', function (e) {
    labelPoepleErreur = document.querySelectorAll('.people .erreur')
    labelPoepleErreur.forEach((labelPoepleError) =>{
        labelPoeple.removeChild(labelPoepleError)
    })
    inputPeople.classList.remove('erreur')
    if (e.target.value === '0') {
        const erreurSpan = document.createElement('span')
        erreurSpan.innerText = "Can't be zero"
        erreurSpan.classList.add('erreur')
        inputPeople.classList.add('erreur')
        labelPoeple.appendChild(erreurSpan)
    }else if (e.target.value.includes('.')) {
        const erreurSpan = document.createElement('span')
        erreurSpan.innerText = "Can't be a decim    l value"
        erreurSpan.classList.add('erreur')
        inputPeople.classList.add('erreur')
        labelPoeple.appendChild(erreurSpan)
    }else{
        numberPeople = +e.target.value
        calculate()
    }
})

reset.addEventListener('click', function(){
    tipAmountPourcent = 0
    bill = 0
    numberPeople = 0
    billInput.value = 'jhjj'
    boutons.forEach((button) => button.classList.remove('active'))
    custom.value = ''
    inputPeople.innerText = 'jjjj'
    tipAmount.innerText = '$0.00'
    total.innerText = '$0.00'
})
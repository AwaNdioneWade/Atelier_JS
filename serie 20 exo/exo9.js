let age = prompt('Quel age avez vous?')
if(age < 0){
    alert(age + ' ne peut pas étre un age')
}else if(age < 18){
    alert('Vous étes mineur')
}else{
    alert('Vous étes majeur')
}
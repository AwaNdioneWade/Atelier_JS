const Case = document.getElementById("case");
const bouton1 = document.getElementById("un")
const bouton2 = document.getElementById("deux")
const bouton3 = document.getElementById("trois")
const bouton4 = document.getElementById("quatre")
const bouton5 = document.getElementById("cinq")

bouton1.addEventListener('click', function(){
        Case.classList.toggle('border-raduis25')
})
bouton2.addEventListener('click', function(){
        Case.classList.toggle('border-raduis35') 
})
bouton3.addEventListener('click', function(){
        Case.classList.toggle('border-raduis45')  
})
bouton4.addEventListener('click', function(){
        Case.classList.toggle('border-raduis55') 
})
bouton5.addEventListener('click', function(){
        Case.classList.toggle('border-raduis65')  
})

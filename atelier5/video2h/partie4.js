window.addEventListener("click", function(){
    console.log('window')
})

document.addEventListener("click", function(){
    console.log('document')
})

document.querySelector('.div2').addEventListener("click", function(e){
    console.log('div 2')
    // e.stopPropagation(); 
})

document.querySelector('.div1').addEventListener("click", function(){
    console.log('div 1')
})

document.querySelector('button').addEventListener("click", function(e){
    // e.prenventDefault() si bouton était une classe
    console.log(e.target)
})


const bounton2 = document.querySelector('.bnt-2')
function alertbtn(){
    alert('I love js')
}
bounton2.addEventListener('click', alertbtn)

const newBackground = document.querySelector('.box-3')
function changeBg(){
    newBackground.style.backgroundColor = 'blue'
}
newBackground.addEventListener('mouseover', changeBg)
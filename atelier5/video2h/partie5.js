// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('Footbal is clicked')
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'rgb(2, 23, 41)'
//         target.style.color = '#fff'
//     }
// })

// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('Basktball is clicked')
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'rgb(2, 23, 41)'
//         target.style.color = '#fff'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log('Boxing is clicked')
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'rgb(2, 23, 41)'
//         target.style.color = '#fff'
//     }
// })

// document.querySelector('#golf').addEventListener('click', function(e) {
//     console.log('Golf is clicked')
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'rgb(2, 23, 41)'
//         target.style.color = '#fff'
//     }
// })


document.querySelector('#sports').addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'rgb(2, 23, 41)'
        target.style.color = '#fff'
    }
})

const sports = document.querySelector('#sports')
const newsport = document.createElement('li')

newsport.innerText = 'rugby';
newsport.setAttribute('id', 'rugby')
sports.appendChild(newsport)
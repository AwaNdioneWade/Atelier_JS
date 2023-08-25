for (let i = 1; i <= 12; i++) {
    let image = document.createElement('img')
    let aleatoire = Math.floor(Math.random() * 100)
    image.src = 'https://picsum.photos/id/' + aleatoire + '/350/350'
    let container = document.getElementById('container')
    container.append(image)
}
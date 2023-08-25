let tab = document.createElement('table')
let rows = prompt('Combien de ligne désirez vous?')
let cols = prompt('Combien de colonne désirez vous?')
for (let i = 1; i <= rows; i++) {
    let row = document.createElement('tr')
    tab.append(row)    
    for (let j = 1; j <= cols; j++) {
        let col = document.createElement('td')
        col.innerHTML = "c'est moi<br></br>"
        row.append(col)    
    }
}
let container = document.getElementById('container')
container.append(tab)
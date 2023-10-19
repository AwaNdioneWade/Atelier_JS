let compteur = document.querySelector('span')
let n = 0
compteur.textContent = n

let notif = document.querySelector('.notif')

let saveNotif = document.querySelector('.save=')

let notifBody = document.querySelector('.modal-body')
notifBody.innerHTML = ""

let btnTrue = document.getElementById('btnTrue')
let btnFalse = document.getElementById('btnFalse')

let title = document.querySelector('h1')

let utilisateursTrue = document.querySelector('.usersTrue')
let utilisateursFalse = document.querySelector('.userFalse')

let usersTrueTable = document.getElementById('usersTrue')
let usersFalseTable = document.getElementById('usersfalse')


btnTrue.addEventListener('click', function(){
    title.innerHTML ="Todos list Completed";
    btnTrue.style.visibility = 'hidden';
    btnFalse.style.visibility = 'visible';
    utilisateursTrue.style.visibility = 'visible'
    utilisateursFalse.style.display = 'none'
})

btnFalse.addEventListener('click', function(){
    title.innerHTML ="Todos list no Completed";
    btnTrue.style.visibility = 'visible';
    btnFalse.style.visibility = 'hidden';
    utilisateursTrue.style.display = 'none'
    utilisateursFalse.style.display = 'flex'
})

async function fetchUsers (){
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const users = await r.json()
        users.forEach(user => {
            if (user['completed'] === true) {
                let ligne = usersTrueTable.insertRow(-1)
                let id = ligne.insertCell(0)
                let title = ligne.insertCell(1)
                let completed = ligne.insertCell(2)
                id.textContent = `${user['id']}`
                title.textContent = `${user['title']}`
                completed.textContent = `${user['completed']}`                    
            }else{
                let ligneF = usersFalseTable.insertRow(-1)
                let name = ligneF.insertCell(0)
                let statut = ligneF.insertCell(1)
                name.textContent = `${user['title']}`
                statut.textContent = `${user['completed']}` 
                statut.style.cursor = 'pointer'

                statut.addEventListener('click', function(){
                    notifBody.innerHTML += `${user['title']} (completed)<br>`
                    notifBody.style.cursor = 'pointer'
                    usersFalseTable.deleteRow(ligneF)  
                    n ++
                    compteur.textContent = n
                })

                notif.addEventListener('click', function(){  
                    n = 0                  
                    compteur.textContent = n
                })
            }
        })

    } catch (error) {
        console.log('Impossible de contacter le serveur');
    }       
}
fetchUsers()





























// async function fetchUsers () {
//     const r = await fetch('https://jsonplaceholder.typicode.com/todos/')
//     if(r.ok === true){
//         return r.json();
//     }
//     throw new Error('Impossible de contacter le serveur');
// }

// fetchUsers().then(users => console.log(users))


// const a = new AbortController()
// Promise.race([
//     fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5&_delay=2000',{
//         signal: a.signal
//     }),
//     fetch('https://jsonplaceholder.typicode.com/todos/?_limit=3', {
//         signal: a.signal
//         })
    
    
// ]).then(r => r.json()).then(body => {
//     a.abort()
//     console.log(body);
// }) 


// async function fetchUsers (){
//     const r = await fetch('https://jsonplaceholder.typicode.com/todos/')
//     if (r.ok === true) {
//         return r.json()
//         .then(users => {
            // users.forEach(user => {
            //     let utilisateursTrue = document.getElementById('users')
            //     let ligne = utilisateursTrue.insertRow(-1)
            //     let id = ligne.insertCell(0)
            //     let title = ligne.insertCell(1)
            //     let completed = ligne.insertCell(2)
            //     id.textContent = `${user['id']}`
            //     title.textContent = `${user['title']}`
            //     completed.textContent = `${user['completed']}`
            //     })
//         })
//     }
//     throw new Error('Impossible de contacter le serveur');
// }
// fetchUsers()



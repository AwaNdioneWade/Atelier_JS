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

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(r => r.json()).then(users => {
users.forEach(user => {
    let utilisateurs = document.getElementById('users')
    let ligne = utilisateurs.insertRow(-1)
    let id = ligne.insertCell(0)
    let title = ligne.insertCell(1)
    let completed = ligne.insertCell(2)
    id.textContent = `${user['id']}`
    title.textContent = `${user['title']}`
    completed.textContent = `${user['completed']}`
    });
    console.log(users);
})
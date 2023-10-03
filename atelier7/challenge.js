
function addUser() {
    let prenom = document.getElementById('prenom')
    let nom = document.getElementById('nom')
    let email = document.getElementById('email')
    let tel = document.getElementById('num')

    let users = document.getElementById('users')

    let ligne = users.insertRow(-1)

    let userPrenom = ligne.insertCell(0)
    let userNom = ligne.insertCell(1)
    let userEmail= ligne.insertCell(2)
    let userTel = ligne.insertCell(3)
    let action= ligne.insertCell(4)

    userPrenom.textContent = prenom.value
    prenom.value = '';
    userNom.textContent = nom.value
    nom.value = '';
    userEmail.textContent = email.value
    email.value = '';
    userTel.textContent = tel.value
    tel.value = '';

    let edit = document.createElement('button')
    edit.innerText = 'Modifier'
    edit.classList.add('edit')
    let supp = document.createElement('button')
    supp.innerText = 'Supprimer'
    supp.classList.add('supp')
    action.append(edit)
    action.append(supp)

    supp.addEventListener('click', function(){
        ligne.remove(users)
    })

    edit.addEventListener('click', function(){
        prenom.value = userPrenom.textContent
        nom.value = userNom.textContent
        email.value = userEmail.textContent
        tel.value = userTel.textContent
        ajout.addEventListener('click', function () {
            ligne.remove(users)
            userPrenom.textContent = prenom.value
            prenom.value = '';
            userNom.textContent = nom.value
            nom.value = '';
            userEmail.textContent = email.value
            email.value = '';
            userTel.textContent = tel.value
            tel.value = '';
        })
    })




}


let ajout = document.querySelector('.ajout')
ajout.addEventListener('click', addUser)
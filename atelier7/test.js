let prenom = document.getElementById('prenom')
let nom = document.getElementById('nom')
let email = document.getElementById('email')
let tel = document.getElementById('num')

let users = document.getElementById('users')

let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || []

let lignes = []

let ajout = document.querySelector('.ajout')

const utilisateur = {
    prenom: prenom.value,
    nom: nom.value,
    email: email.value,
    tel: tel.value
}
utilisateurs.forEach(utilisateur => {
    let ligne = users.insertRow(-1)
    let userPrenom = ligne.insertCell(0)
    let userNom = ligne.insertCell(1)
    let userEmail= ligne.insertCell(2)
    let userTel = ligne.insertCell(3)
    let action= ligne.insertCell(4)
    userPrenom.textContent = utilisateur.prenom
    userNom.textContent = utilisateur.nom
    userEmail.textContent = utilisateur.email
    userTel.textContent = utilisateur.tel
    let edit = document.createElement('button')
    edit.innerText = 'Modifier'
    edit.classList.add('edit')
    let supp = document.createElement('button')
    supp.innerText = 'Supprimer'
    supp.classList.add('supp')
    action.append(edit)
    action.append(supp)

    supp.addEventListener('click', function(){  
        let index = utilisateurs.indexOf(utilisateur);
        if (index !== -1) {
            utilisateurs.splice(index, 1);
        }
        users.deleteRow(ligne);
        console.log(utilisateur);
        console.log(utilisateurs);   
        // Actualiser le tableau utilisateurs dans le localStorage
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
     })
     
 
});

utilisateurs.push(utilisateur)
console.log(utilisateurs);

if (utilisateurs.length == 0) {
    
} else {
    
}



























function addUser() { 
    // let ligne = users.insertRow(-1)

    // let userPrenom = ligne.insertCell(0)
    // let userNom = ligne.insertCell(1)
    // let userEmail= ligne.insertCell(2)
    // let userTel = ligne.insertCell(3)
    // let action= ligne.insertCell(4)
    
    // let edit = document.createElement('button')
    // edit.innerText = 'Modifier'
    // edit.classList.add('edit')
    // let supp = document.createElement('button')
    // supp.innerText = 'Supprimer'
    // supp.classList.add('supp')
    // action.append(edit)
    // action.append(supp)

//     utilisateurs.forEach(utilisateur => {
//        let ligne = users.insertRow(-1)
//        let userPrenom = ligne.insertCell(0)
//        let userNom = ligne.insertCell(1)
//        let userEmail= ligne.insertCell(2)
//        let userTel = ligne.insertCell(3)
//        let action= ligne.insertCell(4)
//        userPrenom.textContent = utilisateur.prenom
//        userNom.textContent = utilisateur.nom
//        userEmail.textContent = utilisateur.email
//        userTel.textContent = utilisateur.tel
//        let edit = document.createElement('button')
//        edit.innerText = 'Modifier'
//        edit.classList.add('edit')
//        let supp = document.createElement('button')
//        supp.innerText = 'Supprimer'
//        supp.classList.add('supp')
//        action.append(edit)
//        action.append(supp)

//        supp.addEventListener('click', function(){
//            utilisateurs.splice(utilisateurs.indexOf(ligne), 1)
//            users.deleteRow(ligne)  
//         // console.log(utilisateurs.indexOf(ligne));
//         // alert('bon');
           
//        })
    
//     //    edit.addEventListener('click', function(){
//     //        prenom.value  = userPrenom.textContent
//     //        nom.value = userNom.textContent
//     //        email.value = userEmail.textContent
//     //        tel.value = userTel.textContent
//     //        let modifier = document.querySelector('.modifie')
//     //        ajout.style.display = 'none'
//     //        modifier.style.display = 'block'
//     //        console.log(utilisateur.ligne);
    
//     //        modifier.addEventListener('click', function () {
//     //            // ligne.splice(0, 0, prenom.value)
//     //            userPrenom.textContent = prenom.value
//     //            userNom.textContent = nom.value
//     //            userEmail.textContent = email.value
//     //            userTel.textContent = tel.value
//     //            ajout.style.display = 'block'
//     //            modifier.style.display = 'none'
    
                  
//     //            localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs))
    
    
//     //        })
    
           
//     //    })
//    });

    // lignes.push(ligne)




    prenom.value = '';    
    nom.value = '';
    email.value = '';
    tel.value = '';
    
}
ajout.addEventListener('click', addUser)
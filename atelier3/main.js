const Case = document.getElementById("case");

Case.addEventListener('mouseenter', function(){
    Case.style.borderRadius = '150px';
})

Case.addEventListener('mouseout', function(){
    Case.style.borderRadius = '0';
})

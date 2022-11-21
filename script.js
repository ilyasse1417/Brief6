const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const email = document.getElementById('email')
const telephone = document.getElementById('telephone')
const button = document.getElementById('button')

const nomError = document.getElementById('nomError')
const prenomError = document.getElementById('prenomError')
const emailError = document.getElementById('emailError')
const telephoneError = document.getElementById('telephoneError')
const clubsError = document.getElementById('clubsError')

var nomValidation = true
var prenomValidation = true
var emailValidation = true
var telephoneValidation = true
var clubValidation = true
// Nom
nom.addEventListener('blur', function(e){
    var nomRegEx = /^[a-zA-Z]{2,30}$/
    const Nom = e.target.value
    if (nomRegEx.test(Nom) === true){
    nomError.style.display = 'none'
    nom.style.border = '1px solid green'
    nomValidation = false}
    else if(Nom === ''){
        nomError.style.display = 'none'
        nom.style.border = '1px solid #f0f0f0'
    }
    else{
    nomError.style.display = 'block'
    nom.style.border = '1px solid red'}
})
// Prenom
prenom.addEventListener('blur', function(e){
    var prenomRegEx = /^[a-zA-Z]{2,30}$/
    const prenom1 = e.target.value
    if (prenomRegEx.test(prenom1) === true){
        prenomError.style.display = 'none'
        prenom.style.border = '1px solid green'
        prenomValidation = false}
    else if(prenom1 === ''){
            prenomError.style.display = 'none'
            prenom.style.border = '1px solid #f0f0f0'
        }
    else{
        prenomError.style.display = 'block'
        prenom.style.border = '1px solid red'}
})
// Email
email.addEventListener('blur', function(e){
    var emailRegEx = /([a-z])+\.([a-z])+@ofppt\.ma/
    const email1 = e.target.value
    if (emailRegEx.test(email1) === true){
    emailError.style.display = 'none'
    email.style.border = '1px solid green'
    emailValidation = false}
    else if(email1 === ''){
        emailError.style.display = 'none'
        email.style.border = '1px solid #f0f0f0'
    }
    else{
    emailError.style.display = 'block'
    email.style.border = '1px solid red'}
})
// Telephone
telephone.addEventListener('blur', function(e){
    var telephoneRegEx = /^(05|06|07)([0-9]{8})$/
    const telephone1 = e.target.value
    if (telephoneRegEx.test(telephone1) === true){
    telephoneError.style.display = 'none'
    telephone.style.border = '1px solid green'
    telephoneValidation = false}
    else if (telephone1 === ''){
    telephoneError.style.display = 'none'
    telephone.style.border = '1px solid #f0f0f0'}
    else{
    telephoneError.style.display = 'block'
    telephone.style.border = '1px solid red'}
})
// Clubs
function isChecked(){
    let count = 0
    for (let i = 1; i < 7; i++) {
    let checkbox = document.getElementById('checkbox'+i)
    if(checkbox.checked === true)
        count++
    }
    if(count>=1 & count<=3){
    clubsError.style.display = 'none'
    clubValidation = false}
    else
    clubsError.style.display = 'block'
}


// Boutton
button.addEventListener('click', function(){
    const nom1 = document.getElementById('nom').value
    const prenom1 = document.getElementById('prenom').value
    const email1 = document.getElementById('email').value
    const telephone1 = document.getElementById('telephone').value
    if(nom1 === ''){
        nomError.style.display = 'block'
        nom.style.border = '1px solid red'
    }
    if (prenom1 === ''){
        prenomError.style.display = 'block'
        prenom.style.border = '1px solid red'
    }
    if (email1 === ''){
        emailError.style.display = 'block'
        email.style.border = '1px solid red'
    }
    if (telephone1 === ''){
        telephoneError.style.display = 'block'
        telephone.style.border = '1px solid red'
    }
    let count = 0
    for (let i = 1; i < 7; i++) {
    let checkbox = document.getElementById('checkbox'+i)
        if(checkbox.checked === true)
        {
            count++
        }
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
})
function validation(){
    if(!nomValidation && !prenomValidation && !emailValidation && !telephoneValidation && !clubValidation){
        console.log('go')
        document.getElementById('buttonGo').href = "confirmation.html"
    }
}
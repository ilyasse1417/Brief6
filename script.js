const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const email = document.getElementById('email')
const telephone = document.getElementById('telephone')

const nomError = document.getElementById('nomError')
const prenomError = document.getElementById('prenomError')
const emailError = document.getElementById('emailError')
const telephoneError = document.getElementById('telephoneError')
const clubsError = document.getElementById('clubsError')

nom.addEventListener('input', function(e){
    const nomRegEx = /^[a-zA-Z]{2,30}$/
    const nom1 = e.target.value
    if (nomRegEx.test(nom1) === true || nom1 === ''){
    nomError.style.display = 'none'
    nom.style.border = '1px solid #f0f0f0'}
    else{
    nomError.style.display = 'block'
    nom.style.border = '1px solid red'}
})
prenom.addEventListener('input', function(e){
    const prenomRegEx = /^[a-zA-Z]{2,30}$/
    const prenom1 = e.target.value
    if (prenomRegEx.test(prenom1) === true || prenom1 === ''){
    prenomError.style.display = 'none'
    prenom.style.border = '1px solid #f0f0f0'}
    else{
    prenomError.style.display = 'block'
    prenom.style.border = '1px solid red'}
})
email.addEventListener('input', function(e){
    const emailRegEx = /([a-z])+\.([a-z])+@ofppt\.ma/
    const email1 = e.target.value
    if (emailRegEx.test(email1) === true || email1 === ''){
    emailError.style.display = 'none'
    email.style.border = '1px solid #f0f0f0'}
    else{
    emailError.style.display = 'block'
    email.style.border = '1px solid red'}
})
telephone.addEventListener('input', function(e){
    const telephoneRegEx = /^(05|06|07)([0-9]{8})$/
    const telephone1 = e.target.value
    if (telephoneRegEx.test(telephone1) === true || telephone1 === ''){
    telephoneError.style.display = 'none'
    telephone.style.border = '1px solid #f0f0f0'}
    else{
    telephoneError.style.display = 'block'
    telephone.style.border = '1px solid red'}
})
var count = 0
function isChecked1(){
    if(document.getElementById('checkbox1').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
function isChecked2(){
    if(document.getElementById('checkbox2').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
function isChecked3(){
    if(document.getElementById('checkbox3').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
function isChecked4(){
    if(document.getElementById('checkbox4').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
function isChecked5(){
    if(document.getElementById('checkbox5').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
function isChecked6(){
    if(document.getElementById('checkbox6').checked){
        count++
    }else{
        count--
    }
    if(count>=1 & count<=3)
    clubsError.style.display = 'none'
    else
    clubsError.style.display = 'block'
}
const signUpButton = document.querySelector('#signUpButton')
const passwordCheck = document.getElementById('passWord')
const confirmCheck = document.getElementById('confirm')

signUpButton.addEventListener('click', () => {if(passwordCheck.value !== confirmCheck.value) {
    alert("Password does not match confirmation")
    return false
}})


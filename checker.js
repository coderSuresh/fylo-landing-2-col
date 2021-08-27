//First of all initialize variables and connect them according to your HTML id
var email = document.getElementById('email') //('email') -- replace email with ID of <input type = "email"> HTML element
var email2 = document.getElementById('email-2')
var button = document.getElementById('btn_get_started') //this is id of <input type = "button">
var buttonBottom = document.getElementById('btn_free')
var error = document.getElementById('error') //this is id of error message
var error2 = document.getElementById('error-2')

//initially hide the message
error.style.display = 'none'
error2.style.display = 'none'
//show message on button click 
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === '') { //if email is empty
        error.style.display = 'block' //make error message visible
        email.style.borderColor = 'red'
    } else { //if email is not empty
        error.style.display = 'none' //make error message invisible
        email.style.borderColor = 'black'
    }
})

buttonBottom.addEventListener('click', (e) => {
    e.preventDefault();
    if (email2.value === '') {
        error2.style.display = 'block'
        email2.style.borderColor = 'red'
    } else {
        error2.style.display = 'none'
        email2.style.borderColor = 'black'
    }
})
function welcomeComponent() {
    let welcomeDiv =  document.createElement("div")
    welcomeDiv.setAttribute("id", "welcome-div")
    let welcomeHeader = document.createElement("h1")
    welcomeHeader.setAttribute("id", "welcome-header")
    let registerHeader = document.createElement("h3")
    registerHeader.setAttribute("id", "registerHeader")
    let registerButton = document.createElement("button")
    registerButton.setAttribute("id", "reg-btn")
    welcomeHeader.textContent = "Welcome to Nutshell!"
    registerHeader.textContent = "Please register"
    registerButton.textContent = "Click Here"
    welcomeDiv.appendChild(welcomeHeader)
    welcomeDiv.appendChild(registerHeader)
    welcomeDiv.appendChild(registerButton)
    return welcomeDiv
}

function registerFormComponent() {
    let registerDiv = document.createElement("form")
    let userName = document.createElement("input")
    userName.setAttribute("type", "text")
    userName.setAttribute("name", "user-name")
    userName.setAttribute("id", "user-name")
    let email = document.createElement("input")
    email.setAttribute("type", "text")
    email.setAttribute("name", "email")
    email.setAttribute("id", "email")
    let password = document.createElement("input")
    password.setAttribute("type", "text")
    password.setAttribute("name", "password")
    password.setAttribute("id", "password")
    let labelUserName = document.createElement("label")
    labelUserName.textContent = "User Name"
    let labelEmail = document.createElement("label")
    labelEmail.textContent = "Email"
    let labelPassword = document.createElement("label")
    password.textContent = "Password"
    let fieldsetUserName = document.createElement("fieldset")
    let fieldsetEmail = document.createElement("fieldset")
    let fieldsetPassword = document.createElement("fieldset")
    fieldsetUserName.appendChild(userName)
    fieldsetUserName.appendChild(labelUserName)
    fieldsetEmail.appendChild(email)
    fieldsetEmail.appendChild(labelEmail)
    fieldsetPassword.appendChild(password)
    fieldsetPassword.appendChild(labelPassword)
    registerDiv.appendChild(fieldsetUserName)
    registerDiv.appendChild(fieldsetEmail)
    registerDiv.appendChild(fieldsetPassword)
    return registerDiv
}
export function handleLoginSubmit(e) {
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    console.log("Login Data:", {login, password});
}

export function handleRegisterSubmit(e) {
    const email = e.target.elements.email.value;
    const login = e.target.elements.login.value;
    const firstName = e.target.elements.firstname.value;
    const lastName = e.target.elements.lastname.value;
    const phone = e.target.elements.phone.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.confirm_password.value;
    console.log("Registration Data:", {email, login, firstName, lastName, phone, password, passwordConfirm});
}
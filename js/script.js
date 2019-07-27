const name = document.querySelector("#name");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const textarea = document.querySelector("#textarea");
const form = document.querySelector("#form");

//RegExp
const emailRe = /\w+@\w+[.]\w{2,4}/;
const passwordReLower = /[a-z]+/
const passwordReUpper = /[A-Z]+/
const passwordReDigit = /\d+/


//div block that will display the error message
const errorElement = document.querySelector("#error");

//Conditions & Error Messages
form.addEventListener("submit", (e) => {

    let messages = [];

    if (name.value === "" || address.value === "" || email.value === "" || password.value === "") {
        messages.push("Please fill out all required fields marked with an *!\n")
    }

    if (email.value !== "" && (!emailRe.test(email.value))) {
        messages.push("Oops that doesn't look like a valid e-mail adress!\n")
    }

    if (password.value !== "" && password.value.length < 8) {
        messages.push("Password must be longer Than 7 characters!\n")
    }

    if (password.value !== "" && (!passwordReLower.test(password.value) || !passwordReUpper.test(password.value) || !passwordReDigit.test(password.value))) {
        messages.push("Password must be a combination of charatacters , numbers and at least a capital letter!\n")
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join("");
    }
})
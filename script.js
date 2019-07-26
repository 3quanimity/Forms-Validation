const name = dcument.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
//div block that will display the error message
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    // let messages = [];

    if (name.value === "" || name.value === null) {
        messages.push("Please Type Your Full Name!")
    }

    if (password.value.length < 8) {
        messages.push("Password Must Be Longer Than 8 Characters")
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join("");
    }
})
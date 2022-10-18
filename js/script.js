let pass = document.getElementById("pass");
let generate = document.getElementById("generate");
let copy = document.getElementById("copy");

function generatePass() {
    let characters =
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    let passLength = 16;
    let password = "";

    for (let i = 0; i < passLength; i++)
        password += characters[Math.floor(Math.random() * characters.length)];

    return password;
}
generate.addEventListener("click", () => {
    pass.value = generatePass();
});

copy.addEventListener("click", () => {
    if (pass.value != "") {
        navigator.clipboard.writeText(pass.value);
        pass.classList.add("active");
        setTimeout(() => {
            pass.classList.remove("active");
        }, 1000);
    }
});

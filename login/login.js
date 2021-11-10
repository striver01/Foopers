var x = document.getElementById("password");

const toggle = () => {
    if (x.type === "password")
        x.type = "text";
    else
        x.type = "password";
}
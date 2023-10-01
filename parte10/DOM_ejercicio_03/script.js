button = document.getElementById("btn")
foto = document.getElementById("foto")
anv = "anverso.jpg"
rev = "reverso.png"

button.addEventListener("click", function () {
    console.log(foto.src.endsWith(rev));
    if (foto.src.endsWith(rev)) {
        foto.src = anv
    } else {
        foto.src = rev
    }
})
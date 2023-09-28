button = document.querySelector("#btn")

button.addEventListener("Click", function() {
    changeText()
})

function ChangeText() {
    document.querySelector("#Text").innerHTML = "La variable está en true"
}
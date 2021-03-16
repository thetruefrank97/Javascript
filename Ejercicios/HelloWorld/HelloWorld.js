
let boton = document.getElementById("submit");


boton.addEventListener("click", function () {
    let mensaje = document.getElementById("Message");
    setTimeout(function () {
        mensaje.innerText = "Hola mundo";
    }, 500)

})

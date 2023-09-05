const boton = document.getElementById("enviarButton");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fecha = document.getElementById("fecha");

boton.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
    nombre: nombre.value,
    apellido: apellido.value,
    fecha: fecha.value
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json));
});
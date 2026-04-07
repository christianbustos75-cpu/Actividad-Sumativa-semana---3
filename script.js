// Evento que se ejecuta al enviar el formulario
document.getElementById("formulario").addEventListener("submit", function(e){

// Evita que la página se recargue
e.preventDefault();

// Obtener valores del formulario
let n=document.getElementById("nombre").value;
let c=document.getElementById("correo").value;
let m=document.getElementById("mensaje").value;
let r=document.getElementById("resultado");

// Validación de campos vacíos
if(n==""||c==""||m==""){
    r.textContent="Completa todos los campos";
    r.style.color="red";
}else{
    // Mensaje cuando el formulario es correcto
    r.textContent="Mensaje enviado correctamente";
    r.style.color="green";
}
});

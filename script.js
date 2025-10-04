function guardarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const password = document.getElementById("password").value;

    const usuario = {
        nombre,
        apellido,
        email,
        fechaNacimiento,
        password
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarTabla();
    document.getElementById("registroForm").reset();
}

function mostrarTabla() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tablaBody = document.getElementById("tablaRegistros").getElementsByTagName('tbody')[0];
    tablaBody.innerHTML = '';

    usuarios.forEach(usuario => {
        let fila = tablaBody.insertRow();
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.fechaNacimiento}</td>
            <td>${usuario.password}</td>
        `;
    });
}

document.getElementById("registroForm").addEventListener("submit", guardarDatos);
window.onload = mostrarTabla;

//array con los objetos usuarios
window.onload = () => {
    const usuarios = [
        { nombre: 'Prueba', apellidos: 'Hernandez perez', telefono: '668654385', email: 'sg3fd@gmail.com', sexo: 'mujer', comentario: 'Prueba dasdsadsad dsa' },
        { nombre: 'aprueba1', apellidos: 'Gea Sanchez', telefono: '692108429', email: 'sf145d@gmail.com', sexo: 'hombre', comentario: 'Prueba' },
        { nombre: 'sergio', apellidos: 'Perez Gea', telefono: '612583810', email: 'sfd1@gmail.com', sexo: 'hombre', comentario: 'Pruebadddddddddddddddddaaa' },
        { nombre: 'limon', apellidos: 'Prueba', telefono: '632158299', email: 's3fd@gmail.com', sexo: 'hombre', comentario: 'Prueba saddasdasdasdsadsadsa' },
        { nombre: 'noah', apellidos: 'limon', telefono: '656091243', email: 'sfd@gmail.com', sexo: 'mujer', comentario: 'Pruebadasdsadas' }

    ];
    //Llamada a la funcion de crear la tabla con los usuarios
    rellenarTabla(usuarios);

    //Creación del input filtro
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'filtro');
    input.setAttribute('placeholder', 'Filtrar');

    const div = document.getElementById("buscador");
    div.appendChild(input);

    //constante con el que filtraremos los nombres de la tabla
    const filtrar = () => {
        if (input.value.length >= 3) {
            const items = usuarios.filter(item => {
                return item.nombre.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()) ||
                    item.apellidos.toLocaleLowerCase().includes(input.value.toLocaleLowerCase());
            });

            rellenarTabla(items);
        } else {
            rellenarTabla(usuarios);
        }
    }
    document.addEventListener('keyup', filtrar);
    console.log(usuarios);

};

//Funcion para crear la tabla con los usuarios
function rellenarTabla(usuarios) {
    var length = usuarios.length;
    var i = 0;
    tbody.innerHTML = '';

    while (i < length) {
        tbody.appendChild(crearFila(usuarios[i]));
        i++;
    }
};

//Constante para crear columnas de la tabla
const crearColumna = (texto) => {
    const columna = document.createElement('td');
    columna.textContent = texto;
    return columna;
};

//Constante para crear las filas de la tabla, añadirles id y añadir que el boton x elimine la fila por id,(el id es el email)
const crearFila = (usuario) => {
    const id = usuario.email;
    const fila = document.createElement('tr');
    fila.setAttribute('id', id);
    fila.appendChild(crearBoton('X', () => document.getElementById(id).remove()));
    fila.appendChild(crearBoton2('E', () => document.getElementById(id)));
    fila.appendChild(crearColumna(usuario.nombre));
    fila.appendChild(crearColumna(usuario.apellidos));
    fila.appendChild(crearColumna(usuario.telefono));
    fila.appendChild(crearColumna(usuario.email));
    fila.appendChild(crearColumna(usuario.sexo));
    fila.appendChild(crearColumna(usuario.comentario));
    return fila;
};

//Constante para crear el td "boton"
const crearBoton = (texto, onClick) => {
    const boton = document.createElement('button');
    boton.id = 'Borrar';
    boton.title = 'Borrar usuario';
    boton.onclick = onClick;
    boton.innerText = texto;
    return boton;
};

const crearBoton2 = (texto, onClick) => {
    const boton2 = document.createElement('button');
    boton2.id = 'editar';
    boton2.title = 'Editar usuario';
    boton2.onclick = onClick;
    boton2.innerText = texto;
    return boton2;
};
window.onload = () => {
    const usuarios = [
        { nombre: 'Sergio', apellidos: 'Gonzalez Mendez', telefono: '666884346', email: 'sergiog@gmail.com', sexo: 'Hombre' },
        { nombre: 'Alicia', apellidos: 'Perez Gea', telefono: '666123123', email: 'aliciap@gmail.com', sexo: 'Mujer' },
        { nombre: 'Sergio', apellidos: 'Villarejo Mesa', telefono: '666999123', email: 'sfd1@gmail.com', sexo: 'Hombre' },
        { nombre: 'Pedro', apellidos: 'Hernandez Gascon', telefono: '666888123', email: 's3fd@gmail.com', sexo: 'Hombre' },
        { nombre: 'sergio', apellidos: 'villarejo gea', telefono: '666777123', email: 'sfd@gmail.com', sexo: 'Hombre' }
    ];
    console.log(usuarios);
    rellenarTabla(usuarios);

    //Creación del boton Filtro
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'filtro');
    input.setAttribute('placeholder', 'Filtrar');
    const div = document.getElementById("buscador");
    div.appendChild(input);

    //constante para hacer que filte el boton
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

    //Creación del th de Acciones
    const th = document.createElement("th");
    th.textContent = "Acciones";
    const prueba = document.getElementById("prueba");
    prueba.insertAdjacentElement("afterbegin", th);
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

//Constante para crear la fila, añadir id (telefono), añadir boton para borrar por id.
const crearFila = (usuario) => {
    const fila = document.createElement('tr');
    const id = usuario.telefono;
    fila.setAttribute('id', id);
    fila.appendChild(crearBoton('X', () => document.getElementById(id).remove()));
    fila.appendChild(crearColumna(usuario.nombre));
    fila.appendChild(crearColumna(usuario.apellidos));
    fila.appendChild(crearColumna(usuario.telefono));
    fila.appendChild(crearColumna(usuario.email));
    fila.appendChild(crearColumna(usuario.sexo));
    return fila;
};

//Constante para crear en la tabla el td  boton "Borrar"
const crearBoton = (texto, onClick) => {
    const boton = document.createElement('button');
    boton.id = 'Borrar';
    boton.title = 'Borrar usuario';
    boton.onclick = onClick;
    boton.innerText = texto;
    return boton;
};
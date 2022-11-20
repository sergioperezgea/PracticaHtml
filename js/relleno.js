window.onload = () => {
    const usuarios = [
        { nombre: 'Sergio', apellidos: 'Gonzalez Mendez', telefono: '666884346', email: 'sergiog@gmail.com', sexo: 'Hombre' },
        { nombre: 'Alicia', apellidos: 'Perez Gea', telefono: '666123123', email: 'aliciap@gmail.com', sexo: 'Mujer' },
        { nombre: 'Sergio', apellidos: 'Villarejo Mesa', telefono: '666999123', email: 'sfd1@gmail.com', sexo: 'Hombre' },
        { nombre: 'Pedro', apellidos: 'Hernandez Gascon', telefono: '666888123', email: 's3fd@gmail.com', sexo: 'Hombre' },
        { nombre: 'sergio', apellidos: 'villarejo gea', telefono: '666777123', email: 'sfd@gmail.com', sexo: 'Hombre' }
    ];

    //Llamada a la funcion de crear la tabla con los usuarios
    rellenarTabla(usuarios);

    //Creación del boton Filtro
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'filtro');
    input.setAttribute('placeholder', 'Filtrar');
    const div = document.getElementById("buscador");
    div.appendChild(input);






    //creacion del formulario y sus inputs
    const formulario = document.createElement("form");
    formulario.setAttribute('id', 'formulario');
    const form = document.getElementById("form");
    form.appendChild(formulario);

    const nombre = document.createElement("input");
    nombre.setAttribute('type', 'text');
    nombre.setAttribute('id', 'nombre');
    nombre.setAttribute('placeholder', 'nombre');
    const div19 = document.getElementById("form");
    div19.appendChild(nombre);


    const apellidos = document.createElement("input");
    apellidos.setAttribute('type', 'text');
    apellidos.setAttribute('id', 'apellidos');
    apellidos.setAttribute('placeholder', 'apellidos');
    const div1 = document.getElementById("form");
    div1.appendChild(apellidos);


    const telefono = document.createElement("input");
    telefono.setAttribute('type', 'text');
    telefono.setAttribute('id', 'telefono');
    telefono.setAttribute('placeholder', 'telefono');
    const div2 = document.getElementById("form");
    div2.appendChild(telefono);

    const email = document.createElement("input");
    email.setAttribute('type', 'text');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'email');
    const div3 = document.getElementById("form");
    div3.appendChild(email);

    const sexo = document.createElement("input");
    sexo.setAttribute('type', 'text');
    sexo.setAttribute('id', 'sexo');
    sexo.setAttribute('placeholder', 'sexo');
    const div4 = document.getElementById("form");
    div4.appendChild(sexo);

    const guardar = document.createElement("input");
    guardar.setAttribute('type', 'button');
    guardar.setAttribute('id', 'guardar');
    guardar.setAttribute('value', 'Guardar');
    guardar.setAttribute('placeholder', 'Guardar');
    const div5 = document.getElementById("form");
    guardar.onclick = modificarInput;
    div5.appendChild(guardar);

    const indice = document.createElement("input");
    indice.setAttribute('type', 'hidden');
    indice.setAttribute('id', 'indice');
    const div6 = document.getElementById("form");
    div6.appendChild(indice);






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


    //cambiar la id de los input de los modificar
    var length = usuarios.length;
    var i = 0;

    while (i < length) {
        const editar = document.getElementById("editar");
        editar.setAttribute('id', i);
        i++
    }


    //hacer el form invisible
    document.getElementById("form").style.visibility = "hidden";

};

//Funcion para crear la tabla con los usuarios
function rellenarTabla(usuarios) {
    var length = usuarios.length;
    var i = 0;
    tbody.innerHTML = '';

    while (i < length) {
        tbody.appendChild(crearFila(usuarios[i], i));
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
const crearFila = (usuario, indice) => {
    const fila = document.createElement('tr');
    const id = usuario.telefono;
    fila.setAttribute('id', id);
    fila.appendChild(crearBorrar('X', () => document.getElementById(id).remove()));
    fila.appendChild(crearModificar('Modificar', () => {
        rellenarInput(usuario, indice);
        document.getElementById("form").style.visibility = "visible";
    }));
    fila.appendChild(crearColumna(usuario.nombre));
    fila.appendChild(crearColumna(usuario.apellidos));
    fila.appendChild(crearColumna(usuario.telefono));
    fila.appendChild(crearColumna(usuario.email));
    fila.appendChild(crearColumna(usuario.sexo));
    return fila;
};


//Constante para crear en la tabla el td  boton "Borrar"
const crearBorrar = (texto, onClick) => {
    const boton = document.createElement('button');
    boton.id = 'Borrar';
    boton.title = 'Borrar usuario';
    boton.onclick = onClick;
    boton.innerText = texto;
    return boton;
};


const crearModificar = (texto, onClick) => {
    const boton2 = document.createElement('button');
    boton2.id = 'editar';
    boton2.class = 'hola';
    boton2.title = 'Editar usuario';
    boton2.setAttribute('class', 'modificar');
    boton2.onclick = onClick;
    boton2.innerText = texto;
    return boton2;
};


function rellenarInput(usuario, indice) {

    const nombre = usuario.nombre;
    const apellidos = usuario.apellidos;
    const telefono = usuario.telefono;
    const email = usuario.email;
    const sexo = usuario.sexo;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidos').value = apellidos;
    document.getElementById('telefono').value = telefono;
    document.getElementById('email').value = email;
    document.getElementById('sexo').value = sexo;
    document.getElementById('indice').value = indice;


}

function modificarInput() {
    //buscar la fila que tiene el mismo indice y actualizarlo




}
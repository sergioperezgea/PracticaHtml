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
    console.log(usuarios);
    rellenarTabla(usuarios);

    //Creación del input filtro
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

    const comentario = document.createElement("input");
    comentario.setAttribute('type', 'text');
    comentario.setAttribute('id', 'comentario');
    comentario.setAttribute('placeholder', 'comentario');
    const div5 = document.getElementById("form");
    div5.appendChild(comentario);

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

    rellenarinput(usuarios);

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
    const fila = document.createElement('tr');
    const id = usuario.telefono;
    fila.setAttribute('id', id);
    fila.appendChild(crearBoton('Borrar', () => document.getElementById(id).remove()));
    //fila.appendChild(crearBoton2('Modificar', () => onclick(window.open("index.html"))));
    fila.appendChild(crearBoton2('Modificar', () => document.getElementById("form").style.visibility = "visible"));
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
    boton2.class = 'hola';
    boton2.title = 'Editar usuario';
    boton2.setAttribute('class', 'modificar');
    boton2.onclick = onClick;
    boton2.innerText = texto;
    return boton2;
};









function rellenarinput(usuarios) {
    var length = usuarios.length;
    var i = 0;







    //poner 6 if comparando el id del buton con la posicion del array
    while (i < length) {
        //console.log(length);
        //console.log(i);



        if (usuarios[i].length = 1) {
            const nombre = usuarios[i].nombre;
            const apellidos = usuarios[i].apellidos;
            const telefono = usuarios[i].telefono;
            const email = usuarios[i].email;
            const sexo = usuarios[i].sexo;
            const comentario = usuarios[i].comentario;

            document.getElementById('nombre').value = nombre;
            document.getElementById('apellidos').value = apellidos;
            document.getElementById('telefono').value = telefono;
            document.getElementById('email').value = email;
            document.getElementById('sexo').value = sexo;
            document.getElementById('comentario').value = comentario;
        }




        i++;

        /*if (i < length) {
            document.getElementById('nombre').value = nombre;
            document.getElementById('apellidos').value = apellidos;
            document.getElementById('telefono').value = telefono;
            document.getElementById('email').value = email;
            document.getElementById('sexo').value = sexo;
            document.getElementById('comentario').value = comentario;
        }*/

    }
}
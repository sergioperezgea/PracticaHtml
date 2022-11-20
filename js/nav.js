const nav = new XMLHttpRequest();
nav.open('GET', 'js/nav.html');
nav.setRequestHeader('Content-Type', 'text/plain');
nav.send();
nav.onload = function(leer) {
    document.getElementById("nav").innerHTML = leer.currentTarget.response;

    var spanElements = document.getElementsByTagName('a');
    for (var i = 0; i < spanElements.length; i++) {
        spanElements[i].style.color = "black";
        spanElements[i].style.textDecoration = "none";
        /*document.getElementById("hoja0").style.color = "green"*/
    }

};

function prueba0() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[0].style.color = "red";
        prueba[0].style.background = "black";
    }
}


function prueba1() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[1].style.color = "red";
        prueba[1].style.background = "black";
    }
}

function prueba2() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[2].style.color = "red";
        prueba[2].style.background = "black";
    }
}


function prueba3() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[3].style.color = "red";
        prueba[3].style.background = "black";
    }
}

function prueba4() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[4].style.color = "red";
        prueba[4].style.background = "black";
    }
}
const nav = new XMLHttpRequest();
nav.open('GET', 'js/nav.html');
nav.setRequestHeader('Content-Type', 'text/plain');
nav.send();
nav.onload = function(leer) {
    document.getElementById("nav").innerHTML = leer.currentTarget.response;

    var spanElements = document.getElementsByTagName('a');
    for (var i = 0; i < spanElements.length; i++) {
        spanElements[i].style.color = "white";
        spanElements[i].style.textDecoration = "none";
        /*document.getElementById("hoja0").style.color = "green"*/
    }

};

function prueba0() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[0].style.color = "#031754";
        prueba[0].style.background = "black";
        prueba[0].style.padding = "0.3%";
    }
}


function prueba1() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[1].style.color = "#031754";
        prueba[1].style.background = "black";
        prueba[1].style.padding = "0.3%";
    }
}

function prueba2() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[2].style.color = "#031754";
        prueba[2].style.background = "black";
        prueba[2].style.padding = "0.3%";
    }
}


function prueba3() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[3].style.color = "#031754";
        prueba[3].style.background = "black";
        prueba[3].style.padding = "0.3%";
    }
}

function prueba4() {
    var prueba = document.getElementsByTagName('a');
    for (var i = 0; i < prueba.length; i++) {
        prueba[4].style.color = "#031754";
        prueba[4].style.background = "black";
        prueba[4].style.padding = "0.3%";
    }
}
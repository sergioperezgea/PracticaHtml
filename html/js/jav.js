const nav = new XMLHttpRequest();
nav.open('GET', 'js/nav.html');
nav.setRequestHeader('Content-Type', 'text/plain');
nav.send();
nav.onload = function(leer) {
    document.getElementById("navegacion").innerHTML = leer.currentTarget.response;
};
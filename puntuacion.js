function agregarGenero() {
    var nuevoGenero = document.getElementById("nuevo-genero").value;
        var lista = document.getElementById("lista-generos");
        var nuevoItem = document.createElement("li");
        nuevoItem.textContent = nuevoGenero;
        lista.appendChild(nuevoItem);
        document.getElementById("nuevo-genero").value = "";

        nuevoItem.classList.add("nuevo-genero");
    
}

function eliminarGenero() {
    var lista = document.getElementById("lista-generos");
    var ultimoItem = lista.lastElementChild;
 
        lista.removeChild(ultimoItem);
    
}

function crearNodo() {
    var nuevoNodo = document.getElementById("nuevo-nodo");

    var section = document.createElement("section");

    var article1 = document.createElement("article");
    article1.textContent = "Artículo 1";

    var aside1 = document.createElement("aside");
    aside1.textContent = "Aside 1";

    var article2 = document.createElement("article");
    article2.textContent = "Artículo 2";

    var aside2 = document.createElement("aside");
    aside2.textContent = "Aside 2";

    section.appendChild(article1);
    section.appendChild(aside1);
    section.appendChild(article2);
    section.appendChild(aside2);

    nuevoNodo.innerHTML = '';
    nuevoNodo.appendChild(section);
}
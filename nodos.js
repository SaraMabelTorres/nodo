let identificador, etiqueta,seccion, clase, nombre, referencia;/*let es una deficinion de una variable*/
identificador=document.getElementById('titulo');/*busca en el html y lo pone en el identificador en el titulo/ arbol de nodos*/
console.log(identificador.innerText);/* mostrar en la consola se adjunta a la variable y el contenido del nodo*/

etiqueta=document.getElementsByTagName("p");/*elements son varios arreglos */ 
console.log(etiqueta[1].innerText);/*posición del arreglo*/ 

seccion=document.getElementsByTagName('section');/*numeros de secciones y lo busca*/ 
console.log(seccion[3].innerText);
clase=document.getElementsByClassName('parrafo');/*es un arreglo y selecciona el parrafo con la clase*/ 
console.log(clase[0].innerText);
nombre=document.getElementsByName('subtitulo');//es un arreglo
console.log(nombre[1].innerText);

//Crear Nodos
let elemento, contenido,elementop;// nombrar las variables
elemento=document.createElement('p');//crea un nodo en parrafo
contenido=document.createTextNode('Párrafo nuevo desde JS');//crea el texto del nodo
elemento.appendChild(contenido);//une el texto
  //colocar el nodo
  etiqueta[2].appendChild(elemento);
elementop=document.createElement('p');
let contenido2=document.createTextNode('mi primer parrado');
elemento.appendChild(contenido2);
etiqueta[0].appendChild(elementop);


  //Nodos con estilo y remplazar

  elemento=document.createElement('p');
  contenido=document.createTextNode('Parrado nuevo desde JS');
  elemento.setAttribute('class','parrafo2')//artibuto que quieres y el valor
  elemento.appendChild(contenido);
  seccion[1].replaceChild(elemento,etiqueta[0]);// el primero es el nuevo y el segundo el cual se va remplazar
//eliminar
  seccion[0].removeChild(nombre[0]);
  //ejercicio en clase
  var nremplazo=document.createElement('p');
  nremplazo.setAttribute('class', 'nuevoNodo');
  var connremplazo=document.createTextNode('Hola Nuevo Nodo');
  nremplazo.appendChild(connremplazo);
  
  // eliminar directamente un elemento sin hijo nodo
  var nelim=document.getElementById('enlace');
  nelim.remove()
  nenlace=document.createElement('section');
  encabezado=document.createElement('h1');
  seccionNueva=document.createElement('section');
  encabezado=document.createElement('h1');
  encabezado.setAttribute('class','encabezado');
  contenido=document.createTextNode("insertar Imágenes desde JS");
  encabezado.appendChild(contenido);

  articulo1=document.createElement('article');
  imagen=document.createElement('img');
  imagen.setAttribute('src', 'img/U1.png');
  articulo1.appendChild(imagen);

  seccionNueva.appendChild(encabezado);
  seccionNueva.appendChild(articulo1);
  seccion[3].insertAdjacentElement('afterend',seccionNueva);

  //crear una nueva seccion y nodos
 seccionNueva2=document.createElement('section')
 a=document.createElement('a')
 a.setAttribute('href','https://www.instagram.com')
 a.setAttribute('title',"acceso a instagram")
 contenidoNuevo=document.createTextNode('Instagram')
 a.appendChild(contenidoNuevo)
 seccion[3].insertAdjacentElement('afterend',a)

 //crear un nuevo imagen
 articulo2=document.createElement('article');
 imagen2=document.createElement('img');
 imagen2.setAttribute('src', 'img/hola.jpeg');
 articulo2.appendChild(imagen2);
 seccion[4].insertAdjacentElement('afterend',articulo2)




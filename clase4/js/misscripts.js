/*
Van a hacer un menu, que contenga, dos elementos
Elemento 1 | Elemento 2

Cuando pongo <a id="menu1" href="">Elemento 1</>

Lo que va a suceder es que se va a refrescar la pantalla.

vamos a tener dos templates

Pueden tener alguna leyenda, una tabla, lo que quieran.

Vamos a ir haciendo un SPA Single page application
Donde al hacer click en menu1 vamos a renderizar template 1
Ahora si hacemos click en el menu2 vamos a renderizar template 2

Los voy a ir poniendo en miDisplay

*/

/*
atraparClickPorId('menu1', () => {
    document.getElementById('miDisplay').innerHTML =
    document.getElementById('miImagen').innerHTML
})

atraparClickPorId('menu2', () => {
    document.getElementById('miDisplay').innerHTML =
    document.getElementById('miTexto').innerHTML
})
*/



/*
document.getElementById('menu1').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('miDisplay').innerHTML =
    document.getElementById('miImagen').innerHTML
})
document.getElementById('menu2').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('miDisplay').innerHTML =
    document.getElementById('miTexto').innerHTML
})
*/
/*
EJEMPLO 1
function Tablita(){
    let valor=parseInt(prompt("Ingrese que tabla de multiplicar quiere optener"))
    for (let f=1; f<=10; f++){
        let tabla= f*valor;
        document.write(f+" * "+valor+" = "+tabla+'<br>')
    }
}
*/

/*
EJEMPLO 2
var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor final de la tabla"));

function tablita(inicio,fin)
{
    var valor=parseInt(prompt("Ingrese que tabla de multiplicar desea obtener"))
    for(let f = inicio; f <= fin; f++){
        var tabla=f*valor;
        document.write(f+" * "+valor+" = "+tabla+'<br>')
    }
}
*/

var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor final de la tabla"));

function tablita(inicio,fin)
{
    var valor=parseInt(prompt("Ingrese que tabla de multiplicar desea obtener"))

    if(inicio<=fin)
        {
        document.write("Mostrando el contenido en forma ascendente <br>")
        for(let f = inicio; f <= fin; f++){
            var tabla=f*valor;
            document.write(f+" * "+valor+" = "+tabla+'<br>')
        }
    }
    else{
        document.write("Mostrando el contenido en forma descendente <br>")
        for(let f = inicio; f >= fin; f--){
            var tabla= f*valor;
            document.write(f+" * "+valor+" = "+tabla+'<br>')
        }
    }
}
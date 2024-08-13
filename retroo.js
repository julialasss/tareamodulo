
var si,i,d,sf,n,emple,posi,uni,sff,z;
document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento</td><td>Salario final</td><td>Rango</td><td>Descuento Uniforme</td></tr>');
emple=prompt("Ingrese la cantidad de empleados")
for (i=1;i<=emple;i++)
    {
        n=prompt('Digite el nombre del obrero número '+i+'');
        posi=prompt('Digite el su posicion de la empresa \n 1 para gerente \n 2 para empleado '+i+'')
        si=prompt('Digite el salario inicial del empleado','');
        while(si <=356){
            si=prompt('Digite el salario inicial del empleado','');
        }
        d=si*0.05;
        sf=si-d;
if (posi==1){
    sff=sf-50;
    z="Gerente"
}else if(posi==2){
    sff=sf-25;
    z="Empleado"
}
        document.write('<tr><td>'+i+'</td><td>'+n+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+sf+'</td><td>'+posi+'</td><td>$'+sff+'</td></tr>');
    }
document.write('</table>');
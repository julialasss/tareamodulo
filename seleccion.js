//declarando las variables
let servicio, forma, costo;
//Captura de datos
alert("Servicios disponibles");
servicio=parseInt(prompt("Ingrese \n 1 para alisado \n 2-Uñas \n 3-Tintes \n 4-Cortes de cabello \n 5-Spa"));

while(servicio<1 || servicio>5)
    {
        servicio=parseInt(prompt("Ingrese \n 1 para alisado \n 2-Uñas \n 3-Tintes \n 4-Cortes \n 5-Spa"));
    }
//capturar la forma
forma=parseInt(prompt("Ingrese la forma de pago \n 1-Credito \n 2-Efectivo"));
while(forma<1 || forma>2)
    {
        forma=parseInt(prompt("Ingrese la forma de pago \n 1-Credito \n 2-Efectivo"));
        //descuento=0.25%
    }


//descuento 
descuentoc=parseInt(prompt("¿Usted es cliente frecuente? \n Si \n No"));
while(descuentoc<1 || descuentoc>2)
    {
        descuentoc=parseInt(prompt("¿Usted es cliente frecuente? \n Si \n No"));
    }

//Procesos

switch(servicio)
{
case 1:
    {
        costo=50;
        break;
    }
case 2: 
{
    costo=25;
    break;
}
case 3: 
{
    costo=35;
    break;
}
case 4: 
{
    costo=10;
    break;
}
default:
    {
        costo=40;
        break;
    }
}//fin switch

//impresion

//Costo con tarjeta
if(forma==1 && servicio==1 && descuentoc==2)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con tarjeta de crédito <br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hará un recargo del 10% "+(costo*1.10).toFixed(2)+"<br>");
    document.write("El pago total será de "+(costo*1.10).toFixed(2));
}
else if(forma==1 && servicio==2 && descuentoc==2)
{
document.write("Usted se hizo un uñas<br>");
document.write("Usted ha cancelado con tarjeta de crédito <br>");
document.write("El costo inicial del servicio es de "+costo+"<br>");
document.write("Se le hará un recargo del 10% "+(costo*1.10).toFixed(2)+"<br>");
document.write("El pago total será de "+(costo*1.10).toFixed(2));
}
else if(forma==1 && servicio==3 && descuentoc==2)
{
document.write("Usted se hizo un tinte<br>");
document.write("Usted ha cancelado con tarjeta de crédito <br>");
document.write("El costo inicial del servicio es de "+costo+"<br>");
document.write("Se le hará un recargo del 10% "+(costo*1.10).toFixed(2)+"<br>");
document.write("El pago total será de "+(costo*1.10).toFixed(2));
}
else if(forma==1 && servicio==4 && descuentoc==2) 
    {
    document.write("Usted se hizo un corte de cabello<br>");
    document.write("Usted ha cancelado con tarjeta de crédito <br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hará un recargo del 10% "+(costo*1.10).toFixed(2)+"<br>");
    document.write("El pago total será de "+(costo*1.10).toFixed(2));
}
else if(forma==1 && servicio==5 && descuentoc==2)
{
document.write("Usted se hizo un Spa<br>");
document.write("Usted ha cancelado con tarjeta de crédito <br>");
document.write("El costo inicial del servicio es de "+costo+"<br>");
document.write("Se le hará un recargo del 10% "+(costo*1.10).toFixed(2)+"<br>");
document.write("El pago total será de "+(costo*1.10).toFixed(2));
}

//Costo en efectivo
else if(forma==2 && servicio==1 && descuentoc==2)
{
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado en fectivo <br>");
document.write("El costo total es de "+costo+"<br>");
}
else if(forma==2 && servicio==2 && descuentoc==2)
{
document.write("Usted se hizo Uñas<br>");
document.write("Usted ha cancelado en fectivo <br>");
document.write("El costo total es de "+costo+"<br>");
}
else if(forma==2 && servicio==3 && descuentoc==2)
{
document.write("Usted se hizo un Tinte<br>");
document.write("Usted ha cancelado en fectivo <br>");
document.write("El costo total es de "+costo+"<br>");
}
else if(forma==2 && servicio==4 && descuentoc==2)
    {
    document.write("Usted se hizo un corte de cabello<br>");
    document.write("Usted ha cancelado en fectivo <br>");
    document.write("El costo total es de "+costo+"<br>");
    }
else if(forma==2 && servicio==5 && descuentoc==2)
{
document.write("Usted se hizo un Spa<br>");
document.write("Usted ha cancelado en fectivo <br>");
document.write("El costo total es de "+costo+"<br>");
}


//Descuento para cliente frecuente

//falata editar los if del 2 para abajo y editar texto
if(forma==1 && servicio==1 && descuentoc==1)
    {
        document.write("Usted se hizo un alisado<br>");
        document.write("Usted ha cancelado con tarjeta de crédito <br>");
        document.write("El costo inicial del servicio es de "+costo+"<br>");
        document.write("Recargo del 10% de tarjeta de credito "+(costo*1.10).toFixed(2)+"<br>");
        document.write("Se le hará un descuento del 25% por ser cliente frecuente, el descuento es de ="+((costo*1.10)*0.25).toFixed(2)+"<br>");
        document.write("El pago total será de "+(costo*1.10-(costo*1.10)*0.25).toFixed(2));
    }
    else if(forma==1 && servicio==2 && descuentoc==1)
    {
    document.write("Usted se hizo un uñas<br>");
    document.write("Usted ha cancelado con tarjeta de crédito <br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Recargo del 10% de tarjeta de credito "+(costo*1.10).toFixed(2)+"<br>");
    document.write("Se le hará un descuento del 25% por ser cliente frecuente, el descuento es de ="+((costo*1.10)*0.25).toFixed(2)+"<br>");
    document.write("El pago total será de "+(costo*1.10-(costo*1.10)*0.25).toFixed(2));
    }
    else if(forma==1 && servicio==3 && descuentoc)
    {
    document.write("Usted se hizo un tinte<br>");
    document.write("Usted ha cancelado con tarjeta de crédito <br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Recargo del 10% de tarjeta de credito "+(costo*1.10).toFixed(2)+"<br>");
    document.write("Se le hará un descuento del 25% por ser cliente frecuente, el descuento es de ="+((costo*1.10)*0.25).toFixed(2)+"<br>");
    document.write("El pago total será de "+(costo*1.10-(costo*1.10)*0.25).toFixed(2));
    }
    else if(forma==1 && servicio==4 && descuentoc) 
        {
        document.write("Usted se hizo un corte de cabello<br>");
        document.write("Usted ha cancelado con tarjeta de crédito <br>");
        document.write("El costo inicial del servicio es de "+costo+"<br>");
        document.write("Se le hará un recargo del 10% "+(costo-0.25)+"<br>");
        document.write("El pago total será de "+(costo-0.25));
    }
    else if(forma==1 && servicio==5 && descuentoc)
    {
    document.write("Usted se hizo un Spa<br>");
    document.write("Usted ha cancelado con tarjeta de crédito <br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hará un recargo del 10% "+(costo-0.25)+"<br>");
    document.write("El pago total será de "+(costo-0.25));
    }
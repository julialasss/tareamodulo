var cantidad=0;
var dolares =1000;
var BTC =57810;
var ETC=3062;


cantidad=parseFloat(prompt("Ingrese el salario"));
while(dolares<1000 || dolares>10000)
{
    cantidad=parseFloat(prompt("Ingrese el salario"));
}

    document.write("_______________________________________________________________________________<br>");
    document.write("DÓLARES --------------------------------- BCD ----------------------------- ETH <br>");
    document.write("_______________________________________________________________________________<br>");

    while(dolares<=cantidad)
        {
            
            document.write("<br>");
            document.write(dolares+"----------------------------------"+(dolares/BTC)+"---------------------"+dolares/ETC+"<br>");
            document.write("<br>");
        
            dolares++;
        }
        
        document.write("___________________________________________________________________________<br>");
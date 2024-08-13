var cantidad = 4;
var empleado = new Array(cantidad);
var salario = new Array(cantidad);
var ISSS = new Array(cantidad);
var AFP = new Array(cantidad);
var nuevoSalario = new Array(cantidad);
var salarioFinal = new Array(cantidad);
var renta = new Array(cantidad);
var ISSST = 0;
var AFPT = 0;
var rentaT = 0;
var SIT = 0;

// Proceso
alert("Laboratorio 1 Ejercicio 1");

// Pidiendo los datos del empleado
for (var i = 0; i < cantidad; i++) {
  empleado[i] = prompt("Ingrese el nombre del empleado " + (i + 1));
  while (empleado[i] == "") {
    empleado[i] = prompt("Ingrese el nombre del empleado " + (i + 1));
  }

  salario[i] = parseInt(prompt("Ingrese el salario del empleado " + (i + 1)));
  while (salario[i] < 257 || salario[i] > 3000) {
    salario[i] = parseInt(prompt("Ingrese el salario del empleado " + (i + 1)));
  }

        // Calculando el nuevo salario
        ISSS[i] = salario[i] * 0.03;
        AFP[i] = salario[i] * 0.065;
        nuevoSalario[i] = salario[i] - ISSS[i] - AFP[i];

            // Verificar en que tramo pertenece y calculando la renta segun la informacion del cuadro
            if (nuevoSalario[i] <= 472) 
                {
                renta[i] = 0;
            } else if (nuevoSalario[i] <= 895.24) 
                {
                renta[i] = (nuevoSalario[i] - 472) * 0.10 + 17.67;
            } else if (nuevoSalario[i] <= 2038.10) 
                {
                renta[i] = (nuevoSalario[i] - 895.24) * 0.20 + 60;
            } else 
                {
                renta[i] = (nuevoSalario[i] - 2038.10) * 0.30 + 288.57;
            }

            // Salario inicial total
            SIT += salario[i];
            ISSST += ISSS[i];
            AFPT += AFP[i];
            rentaT += renta[i];
            salarioFinal[i] = salario[i] - ISSS[i] - AFP[i] - renta[i];
        }

                // Menu
                let menu;
                menu = parseInt(prompt("Ingrese \n 1-Mostrar tabla del empleado \n 2-Mostrar vectores"));
                while (menu < 1 || menu > 2) {
                menu = parseInt(prompt("Ingrese \n 1-Mostrar tabla del empleado \n 2-Mostrar vectores"));
                }

                    switch (menu) {
                    case 1:
                        document.write("_______________________________________________________________________________________<br>");
                        document.write("Empleado --------------- Salario Inicial --------------- ISSS --------------- AFP --------------- Renta --------------- Salario Final <br>");
                        document.write("_______________________________________________________________________________________<br>");

                        for (var i = 0; i < cantidad; i++) {
                        document.write("<br>");
                        document.write(empleado[i] + "---------------" + salario[i] + "---------------" + ISSS[i] + "---------------" + AFP[i] + "---------------" + renta[i] + "---------------" + salarioFinal[i] + "<br>");
                        document.write("<br>");
                        }
                        document.write("___________________________________________________________________________________<br>");
                        break;

                    case 2:
                        document.write("Totales:<br>");
                        document.write("Salario inicial total: " + SIT + "<br>");
                        document.write("ISSS total: " + ISSST + "<br>");
                        document.write("AFP total: " + AFPT + "<br>");
                        document.write("Renta total: " + rentaT + "<br>");
                        document.write("Salario Final Total: " + SIT - ISSST - AFPT - rentaT + "<br>");
                        break;
                    }
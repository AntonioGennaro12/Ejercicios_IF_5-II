/* Psaseo de Mascotas "los devs"
Parte #1: Perros o gatos (no simultáneos)
hasta 3 por cliente
Preguntar e informar
Parte #2: Se agrega pedir el tiempo 
de paseo qu epuede ser de 30 a 60 minutos.
*/

const CANT_MAX_MASCOTAS   =   3;
const PASEO_MINIMO_MIN    =  30;
const PASEO_MAXIMO_MIN    =  60;

let cantPerros  = prompt("Cuantos Perros desea que paseemos?");
let cantGatos   = prompt("Cuantos Gatos desea que paseemos?");
let tiempoPaseo = prompt("Ingrese la duración del paseo que desea (en minutos)");

/* Mejora para prevenir errores por no ingresar un número o presinar Enter*/
/* sin embargo todavía puede se rmejorado*/
if (cantPerros.trim()   != "") {cantPerros   = parseInt(cantPerros)}   else {cantPerros = 0};
if (cantGatos.trim()    != "") {cantGatos    = parseInt(cantGatos)}    else {cantGatos = 0};
if (tiempoPaseo.trim()  != "") {tiempoPaseo  = parseInt(tiempoPaseo)}  else {tiempoPaseo = 0};

if((tiempoPaseo >= PASEO_MINIMO_MIN) && (tiempoPaseo <= PASEO_MAXIMO_MIN)) {
    if ((cantPerros + cantGatos) == 0) {
        document.write("Paseamos Perros ó Gatos, hasta "+
            CANT_MAX_MASCOTAS+ ".- de ellos por cliente. Muchas gracias por su consulta!");
        }
    else if (((cantPerros + cantGatos) <= CANT_MAX_MASCOTAS) && 
                ((cantPerros == 0)||(cantGatos == 0))) {
        document.write("Con gusto pasearemos sus Mascotas: ");
        if (cantPerros > 0) {document.write (cantPerros+ ".- Perro/s ")};
        if (cantGatos  > 0) {document.write (cantGatos+ ".- Gato/s ")};
        document.write(", por un tiempo de "+tiempoPaseo+"minutos. ");
        }
    else{ 
        document.write("Lo sentimos sólo podemos pasear hasta "+CANT_MAX_MASCOTAS+
         ".- perros ó gatos por cliente, en forma exclusiva.")
    }; 
}
else {
    document.write("Lo sentimos sólo hacemos paseos por un mínimo de "+PASEO_MINIMO_MIN+
     "minutos y un máximo de "+PASEO_MAXIMO_MIN+"minutos.");
}; 

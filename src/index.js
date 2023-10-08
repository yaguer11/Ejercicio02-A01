// Importa el módulo readline de Node.js
const readline = require('readline');

// Utilización del método createInterface y esta instancia la almacena en la variable leer
const leer = readline.createInterface({
  input: process.stdin, // Establece la entrada de la interfaz de lectura
  output: process.stdout // Establece la salida de la interfaz de escritura
});

// Funciones de la calculadora
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No es posible dividir por cero.";
  }
  return a / b;
}

// Función para realizar operaciones 
function realizarOperacion() {
  console.log("*****************************");
  console.log("***     CALCULADORA       ***");
  console.log("*****************************");
  
  // Solicitar al usuario que ingrese dos números
  leer.question("Ingrese el primer número: ", (num1) => {
    leer.question("Ingrese el segundo número: ", (num2) => {
    
      // Conversión a valores numéricos
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Menú
      console.log("  Seleccione una operación:");
      console.log("   (1) Suma");
      console.log("   (2) Resta");
      console.log("   (3) Multiplicación");
      console.log("   (4) División");

      leer.question("Elija una opción: ", (opcion) => {
        switch (opcion) {
          case '1':
            console.log(`Resultado: ${sumar(num1, num2)}`);
            break;
          case '2':
            console.log(`Resultado: ${restar(num1, num2)}`);
            break;
          case '3':
            console.log(`Resultado: ${multiplicar(num1, num2)}`);
            break;
          case '4':
            console.log(`Resultado: ${dividir(num1, num2)}`);
            break;
          default:
            console.log("Opción no válida.");
        }
        
        // Preguntar si desea realizar otra operación y validar la respuesta
        const validarRespuesta = (respuesta) => {
          if (respuesta.toUpperCase() === 'S') {
            realizarOperacion(); // Llama a la función realizarOperacion para volver a utilizar la calculadora
          } else if (respuesta.toUpperCase() === 'N') {
            console.log("Hasta pronto!");
            leer.close(); // Cierra la interfaz de lectura creada por readLine
          } else {
            console.log("Opción no válida. Por favor, ingrese 'S' o 'N'.");
            leer.question("Ingrese una opción (S/N): ", validarRespuesta);
          }
        };

        console.log("¿Desea realizar otra operación?");
        leer.question("Ingrese una opción (S/N): ", validarRespuesta);
      });
    });
  });
}

// Iniciar el programa
realizarOperacion();

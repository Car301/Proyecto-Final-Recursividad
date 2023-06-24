//Explicar que son estructuras,Tipos de valor y Referencia.

//Explicar las Referencias Circulares.

//Explicar que es Recurisividad,que es el caso Base?.

//Mostrar un Ejemplo Clásico y Comparar contra su versión Recursividad.
Opciones:
Factorial-Comparar-iterativo-vs-Recursivo
Fibonnaci-Comparar-iterativo-vs-Recursivo 

Factorial-Comparar-iterativo-vs-Recursivo
// Función para calcular el factorial de forma iterativa
function factorialIterativo(n) {
  if (n < 0) {
    return NaN; // Factorial de un número negativo no está definido
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

// Función para calcular el factorial de forma recursiva
function factorialRecursivo(n) {
  if (n < 0) {
    return NaN; // Factorial de un número negativo no está definido
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursivo(n - 1);
}


// Implementación iterativa del factorial
function factorialIterativo(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Implementación recursiva del factorial
function factorialRecursivo(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursivo(n - 1);
}

// Ejemplo de uso
const numero = 5;
CompararFactorial(numero);


let _ = require('underscore')

let arrNumerosPrimos = [2]
let numeroAIngestigar = 3

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

for (;;) {
   // tengo que pasar el numero a investigar por todos
   // ls elementos del array para ver si alguno es
   // divisible
   console.log('investigando: ' + numeroAIngestigar)
   let llegoAlFinal = true
   for (let idx = 0; idx < arrNumerosPrimos.length; idx++) {
      if (esDivisible(numeroAIngestigar, arrNumerosPrimos[idx])) {
         llegoAlFinal = false
         console.log('BREAK')
         break;
      }
   }
   if (llegoAlFinal) {
      arrNumerosPrimos.push(numeroAIngestigar)
   }
   numeroAIngestigar++
   console.log(arrNumerosPrimos)
}
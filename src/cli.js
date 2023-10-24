var Command = require('commander').Command;
var debounce = require('../src/fncDebounce.js').debounce; // Importa la función debounce desde tu archivo fncDebounce.ts
var program = new Command();
program
    .version('1.0.0')
    .description('CLI para simular una acción con debounce en TypeScript');
program
    .command('action <delay> <message>')
    .description('Ejecutar una acción después de un retraso personalizado')
    .action(function (delay, message) {
    var delayMs = parseInt(delay);
    var debouncedAction = debounce(function () {
        console.log("\u00A1Acci\u00F3n ejecutada: ".concat(message));
    }, delayMs);
    console.log("Esperando ".concat(delayMs, " milisegundos antes de ejecutar la acci\u00F3n..."));
    // Iniciar el retraso y la acción
    debouncedAction();
});
program.parse(process.argv);

const { Command } = require('commander');
const { debounce } = require('../src/fncDebounce.js'); // Importa la función debounce desde tu archivo fncDebounce.ts
const program = new Command();

program
  .version('1.0.0')
  .description('CLI para simular una acción con debounce en TypeScript');

program
  .command('action <delay> <message>')
  .description('Ejecutar una acción después de un retraso personalizado')
  .action((delay: string, message: string) => {
    const delayMs = parseInt(delay);
    const debouncedAction = debounce(() => {
      console.log(`¡Acción ejecutada: ${message}`);
    }, delayMs);

    console.log(`Esperando ${delayMs} milisegundos antes de ejecutar la acción...`);
    
    // Iniciar el retraso y la acción
    debouncedAction();
  });

program.parse(process.argv);

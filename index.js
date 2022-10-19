import * as rl from 'node:readline/promises';

let readline;

function initialize() {
  if (readline) return;

  readline = rl.createInterface(process.stdin, process.stdout);
  readline.pause();
  // pausing the stream so it doesn't prevent Node from exiting
}

export async function question(message, prompt = " ") {
  if (!readline) initialize();

  readline.resume();
  const retval = await readline.question(message + prompt);
  readline.pause();

  return retval;
}

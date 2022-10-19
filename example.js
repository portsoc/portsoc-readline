import { question } from './index.js';

const name = await question("what's your name?");

console.log(`hello, ${name}`);

# portsoc-readline – easy-to-use promise-based input

This is an input library that provides a single method `question` which gets user input.  It's promise-based so it works nicely with top-level await, meaning you can use it like this:

```js
const drink = await question('tea or coffee?');
```

## Installation

```sh
npm install uop-readline
```

## Example:

```js
import { question } from 'uop-readline';

const name = await question("Hi, what's your name?");
console.log(`Hello, ${name}!`);
```

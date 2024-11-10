import readline from 'readline';

async function loadGreeting(language) {
  let greeting;

  switch (language) {
    case 'en':
      greeting = await import('./greeting_en.js');
      break;
    case 'ru':
      greeting = await import('./greeting_ru.js');
      break;
    case 'zh':
      greeting = await import('./greeting_zh.js');
      break;
    case 'hi':
      greeting = await import('./greeting_hi.js');
      break;
    case 'pt':
      greeting = await import('./greeting_pt.js');
      break;
    default:
      console.log("Unsupported language");
      return;
  }

  console.log(greeting.default);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter language code: ", (language) => {
  loadGreeting(language);
  rl.close();
});

const chalk = require('chalk');

console.log('I am before replacing it');

const oldLog = console.log;

global.console.log = (...butta) => oldLog(chalk.yellow(...butta));

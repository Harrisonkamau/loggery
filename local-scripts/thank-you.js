const chalk = require('chalk');
const { version } = require('../package.json');

const MESSAGE = 'Thank you for installing';
const PACKAGENAME = 'loggery';
const NPM_LINK = 'Find our docs at ...';

const thankYou = () => chalk.yellow(`${MESSAGE} '${PACKAGENAME}' version ${version}!`);

console.log(thankYou());

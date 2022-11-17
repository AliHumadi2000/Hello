var cron = require('node-cron');
let shell=require('shelljs');

cron.schedule(' * * * * *', () => {//* * * * *
  shell.exec('node rep.js').code
  
});
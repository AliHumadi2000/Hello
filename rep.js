const shell = require('shelljs');
const fsExtra = require('fs-extra');// clear the directory
var http = require('http');
var fs = require('fs');//reading file
var cron = require('node-cron');// for sechduiling 
// const fsp = require('fs').promises; // promise version of require('fs');

const dir = 'C:/Users/abdoa/Downloads/js/Hello';//C:\Users\abdoa\Downloads\js\Js\Hello

fsExtra.emptyDirSync(dir);
shell.cd(dir)
shell.exec('git clone https://github.com/AliHumadi2000/Hello.git')


http.createServer(function (req, res) {
    fs.readFile(`${dir}/Hello/hi.html`, function(err, data) {//C:/Users/abdoa/Downloads/js/Hello/Hello/hi.html
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
  console.log('server started ');
  //console.log("server sta");
  cron.schedule(' * * * * *', () => {//* * * * *
    console.log('server stop');
    process.exit();
    
  });
  



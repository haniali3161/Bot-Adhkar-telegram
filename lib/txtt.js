const fs = require('fs-extra');

module.exports = {
  t1:fs.readFileSync('./lib/txtt/t1.txt',{encoding:'utf8', flag:'r'}),
  t2:fs.readFileSync('./lib/txtt/t2.txt',{encoding:'utf8', flag:'r'}),
  t3:fs.readFileSync('./lib/txtt/t3.txt',{encoding:'utf8', flag:'r'}),
  t4:fs.readFileSync('./lib/txtt/t4.txt',{encoding:'utf8', flag:'r'}),
  t5:fs.readFileSync('./lib/txtt/t5.txt',{encoding:'utf8', flag:'r'}),
  t6:fs.readFileSync('./lib/txtt/t6.txt',{encoding:'utf8', flag:'r'}),
  t7:fs.readFileSync('./lib/txtt/t7.txt',{encoding:'utf8', flag:'r'}),
  } 
   
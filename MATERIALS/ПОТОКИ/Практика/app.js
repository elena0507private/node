const TypeTransform = require("./TypeTransform");

const fs = require("fs");
var rstream = fs.createReadStream("./hello.txt", {encoding: "utf8"});
var wstream = fs.createWriteStream("./goAway.txt", {encoding: "utf8"});
let tt = new TypeTransform('111');

rstream
  .pipe(tt)
  .pipe(wstream) 
  .on('finish', function () {
    console.log('Has gone/done....');
  });


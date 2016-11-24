let fs = require('fs');


let rawText = fs.readFileSync('Languages.txt', "utf8");

rawText = rawText.replace(/(\[[0-9a-zA-Z/].*])\n"((?:.|\n|\r)*?)"\n?\n?\n?(?=(?:\n\[[0-9a-zA-Z/].*]|$))/g, (match, m1, m2)=>{
  return `${m1}:\n  "${m2.replace(/(?:\n|\r\n|\r)/g, "\n  ").replace(/"/g, '\\"')}"\n`
});

fs.writeFileSync('YAML/Languages.yaml', rawText);
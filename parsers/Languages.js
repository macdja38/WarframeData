let fs = require('fs');


let rawText = fs.readFileSync('Languages.txt', "utf8");

rawText = rawText.replace(/\[.*]/g, '$&:');
rawText = rawText.replace(/[^\n]"(?!\n|\r\n|\r)/gm, '\\"');
rawText = rawText.replace(/"(?:.|\n|\r\n|\r)*?\\{0}?"/g, (match)=>{
  return `  ${match.replace(/(?:\n|\r\n|\r)/g, "\n  ")}`
});

fs.writeFileSync('YAML/Languages.yaml', rawText);
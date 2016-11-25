/**
 * Created by macdja38 on 2016-11-24.
 */
let fs = require('fs');
let stringify = require('json-stable-stringify');
let yaml = require('js-yaml');

let rawText = fs.readFileSync('MissionDecks.txt', "utf8");

rawText = rawText.replace(/Stripped=True/g, "");
rawText = rawText.replace(/(\[[0-9a-zA-Z\/]*])\n((?:.|\n|\r)*?)\n?\n?\n?(?=(?:\n\[[0-9a-zA-Z\/]*]|$))/g, (match, m1, m2) => {
  m2 = m2.replace(/ - /g, "   - ");
  m2 = m2.replace(/((?:Rotation) \w):\n((?:.|\n)*?)(?=Rotation|$)/g, (match, m1, m2) => {
    return `  ${m1}:\n   -${m2.replace(/\n(?=..)/g, "\n   -")}\n`;
  });
  return `${m1}:\n  Locations:\n${m2}\n`
});

fs.writeFileSync('YAML/MissionDecks.yaml', rawText);

fs.writeFileSync('JSON/MissionDecks.json', stringify(yaml.safeLoad(rawText), {space: "  "}));
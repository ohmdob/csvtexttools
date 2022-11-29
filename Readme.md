## CSV Text Tools

`npm install csvtexttools`

### OR

`yarn add csvtexttools`

### Playground

[codesandbox link](https://codesandbox.io/s/zen-cherry-by50yg?file=/src/App.js)

### How to use

`var tools = require('csvtexttools');`

### output sql

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'sql','test_tb');`

// output INSERT INTO test_tb(a,b,c) VALUES ('1','2','3');

INSERT INTO test_tb(a,b,c) VALUES ('4','5','6');

### output json

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'json');`

// output [{"a":"1","b":"2","c":"3"},{"a":"4","b":"5","c":"6"}]

### output objects

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'objects');`

// output [
    { a: "1", b: "2", c: "3" },
    { a: "4", b: "5", c: "6" }
]
## CSV Text Tools

`npm install csvtexttools`

### OR

`yarn add csvtexttools`

### How to use

`var tools = require('csvtexttools');`

### output sql

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'sql');`

// output INSERT INTO a,b,c VALUES ('1','2','3');INSERT INTO a,b,c VALUES ('4','5','6');

### output json

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'json');`

// output {"a":"1","b":"2","c":"3"}`

### output objects

`const output = tools.csvtexttools("a,b,c\n1,2,3\n4,5,6",'objects');`

// output [
    { a: "1", b: "2", c: "3" },
    { a: "4", b: "5", c: "6" }
]
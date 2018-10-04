const _ = require("underscore");
_.n = require("./underscore.nest.js");

let dataStepA = require('./dataStepA.json');

const dataSet = dataStepA;

dataStepB = _.n.nest(dataSet,['node_id']);


let fs = require('fs');
fs.writeFile("./dataStepB.json", JSON.stringify(dataStepB), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

//import * as d3 from 'd3-collection';

d3 = require('d3');

d3.json("ro.json", function(error, flatData) {
    if (error) throw error;

    // assign null correctly
    flatData.forEach(function(d) {
        if (d.parent_id == "null") { d.parent_id = null};
    });

    // convert the flat data into a hierarchy
    var treeData = d3.stratify()
        .id(function(d) { return d.node_id; })
        .parentId(function(d) { return d.parent_id; })
        (flatData);

    // assign the name to each node
    treeData.each(function(d) {
        d.node_id = d.id;
    });


let stepA = d3.stratify()
    .id(function(d) { return d.node_id; })
    .parentId(function(d) { return d.parent_id; })
    (data);

stepA.each(function(d) {
    d.node_id = d.id;
});
let fs = require('fs');
fs.writeFile("./dataTree3.json", JSON.stringify(stepA), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

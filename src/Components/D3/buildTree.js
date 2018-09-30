

var dataSet = [{"xid_detail_id":789,"node_id":1669423602,"subsetXidId":1046,"component_order":0,"component_name":"ProcessRepairOrder","nillable":false,"node_type":"COMPONENT","parent_id":null,"repeats":false,"required":false,"xpath":"ProcessRepairOrder","occurs":"(1..1)","char_type":" ","length":"","regex_or_value":"","field_description":"Process Repair Order","business_rules":"","field_name":"","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":"1","min_occurs":"1"},
    {"xid_detail_id":711,"node_id":815967519,"subsetXidId":1046,"component_order":1,"component_name":"attribute(s)","nillable":false,"node_type":"ATTRIBUTE_CONTAINER","parent_id":1669423602,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/attribute(s)","occurs":null,"char_type":null,"length":null,"regex_or_value":null,"field_description":null,"business_rules":"","field_name":"","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":null,"min_occurs":null},
    {"xid_detail_id":608,"node_id":-50320507,"subsetXidId":1046,"component_order":2,"component_name":"releaseID","nillable":false,"node_type":"ATTRIBUTE","parent_id":815967519,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/releaseID","occurs":"(1..1)","char_type":"","length":"[6]","regex_or_value":"VALID VALUE: \"5.10.2\"","field_description":"STAR release version of this BOD.","business_rules":"","field_name":"","has_children":false,"has_enum":false,"selected_enum_values":"[]","max_occurs":null,"min_occurs":null},
    {"xid_detail_id":467,"node_id":-1645045740,"subsetXidId":1046,"component_order":3,"component_name":"systemEnvironmentCode","nillable":false,"node_type":"ATTRIBUTE","parent_id":815967519,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/systemEnvironmentCode","occurs":"(1..1)","char_type":" Enum","length":"n/a","regex_or_value":"","field_description":"Indicates whether this BOD is being sent in a \"Test\" or a \"Production\" mode. If the BOD is being sent in a test mode, the information should not affect the business operation. However, if the BOD is sent in \"Production\" mode it is assumed that all test has been complete and the contents of the BOD are to affect the operation of the receiving business application(s).","business_rules":"","field_name":"","has_children":false,"has_enum":true,"selected_enum_values":"[\"Test\",\"Production\"]","max_occurs":null,"min_occurs":null},
    {"xid_detail_id":583,"node_id":-259763614,"subsetXidId":1046,"component_order":4,"component_name":"languageCode","nillable":false,"node_type":"ATTRIBUTE","parent_id":815967519,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/languageCode","occurs":"(1..1)","char_type":" Enum","length":"n/a","regex_or_value":"","field_description":"Indicates the language that the contents of the BOD is in unless otherwise stated.","business_rules":"","field_name":"","has_children":false,"has_enum":true,"selected_enum_values":"[\"pa-IN\"]","max_occurs":null,"min_occurs":null},
    {"xid_detail_id":567,"node_id":-395903822,"subsetXidId":1046,"component_order":5,"component_name":"star:ApplicationArea","nillable":false,"node_type":"COMPONENT","parent_id":1669423602,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/star:ApplicationArea","occurs":"(1..1)","char_type":" ","length":"","regex_or_value":"","field_description":"","business_rules":"","field_name":"","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":"1","min_occurs":"1"},
    {"xid_detail_id":760,"node_id":1313532576,"subsetXidId":1046,"component_order":6,"component_name":"star:Sender","nillable":false,"node_type":"COMPONENT","parent_id":-395903822,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/star:ApplicationArea/star:Sender","occurs":"(1..1)","char_type":" ","length":"","regex_or_value":"","field_description":"","business_rules":"","field_name":"","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":"1","min_occurs":"1"},
    {"xid_detail_id":760,"node_id":1313532576,"subsetXidId":1046,"component_order":6,"component_name":"star:Sender","nillable":false,"node_type":"COMPONENT","parent_id":-395903822,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/star:ApplicationArea/star:Sender","occurs":"(1..1)","char_type":" ","length":"","regex_or_value":"","field_description":"","business_rules":"","field_name":"","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":"1","min_occurs":"1"},
    {"xid_detail_id":617,"node_id":67254969,"subsetXidId":1046,"component_order":7,"component_name":"star:TaskID","nillable":false,"node_type":"ELEMENT","parent_id":1313532576,"repeats":false,"required":false,"xpath":"ProcessRepairOrder/star:ApplicationArea/star:Sender/star:TaskID","occurs":"(1..1)","char_type":"","length":"[1]","regex_or_value":"VALID VALUE:  \"D\",\"H\"","field_description":"Indicates Daily or Historical File","business_rules":"D indicates daily data is sent in the BOD. Send for all Daily, non-History files. \"H\" indicates history data is sent in the BOD for one of the following reasons: 1 - Historical data is requested by Ford IT or the React! help desk (BAC) or 2 - The initial 12 month history file is sent.","field_name":"FILE TYPE FLAG","has_children":true,"has_enum":false,"selected_enum_values":"[]","max_occurs":"1","min_occurs":"0"}];

function buildHierarchy(arry) {

    var roots = [];
    var children = [];

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arry.length; i < len; ++i) {
        var node = arry[i],
            p = node.parent_id,
            target = !p ? roots : (children[p] || (children[p] = []));

        target.push({ node: node });
    }

    // function to recursively build the tree
    var findChildren = function(parent) {
        if (children[parent.node.node_id]) {
            parent.children = children[parent.node.node_id];
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}


const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})



let fs = require('fs');
fs.writeFile("./dataSet.json", JSON.stringify(buildHierarchy(dataSet)), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

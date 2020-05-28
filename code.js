var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// opens the ui.html and set the size of it
figma.showUI(__html__, { width: 250, height: 320 });
//figma.resize(100, 200);
figma.ui.onmessage = msg => {
    // UI input attributs Values
    let gridValue = msg.gridValue;
    let behavior = msg.behavior;
    // -----------------------------
    if (msg.type === 'adj_siz') {
        // it loops through multiple selection
        if (!isNaN(gridValue)) {
            Promise.all(figma.currentPage.selection.map(selected => correct(selected, behavior, gridValue)));
        }
        else {
            figma.notify("Please input a number");
        }
    }
    if (msg.type === 'plus_w') {
        // it loops through multiple selection
        if (!isNaN(gridValue)) {
            Promise.all(figma.currentPage.selection.map(selected => plusW(selected, behavior, gridValue)));
        }
        else {
            figma.notify("Please input a number");
        }
    }
    if (msg.type === 'minus_w') {
        // it loops through multiple selection
        if (!isNaN(gridValue)) {
            Promise.all(figma.currentPage.selection.map(selected => minusW(selected, behavior, gridValue)));
        }
        else {
            figma.notify("Please input a number");
        }
    }
    if (msg.type === 'plus_h') {
        // it loops through multiple selection
        if (!isNaN(gridValue)) {
            Promise.all(figma.currentPage.selection.map(selected => plusH(selected, behavior, gridValue)));
        }
        else {
            figma.notify("Please input a number");
        }
    }
    if (msg.type === 'minus_h') {
        // it loops through multiple selection
        if (!isNaN(gridValue)) {
            Promise.all(figma.currentPage.selection.map(selected => minusH(selected, behavior, gridValue)));
        }
        else {
            figma.notify("Please input a number");
        }
    }
};
// ---------------------------------------------------------------
// adjust size of Object
// ---------------------------------------------------------------
function correct(node, behavior, gridValue) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (node.type) {
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'RECTANGLE':
                {
                    // // console.log('RECTANGLE');
                    let values = checkDev([node.width, node.height], behavior, gridValue);
                    if (values[0] != 0 || values[1] != 0) {
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        figma.notify("Changed:" + snackMsgW + snackMsgH);
                        node.resize(values[0] == 0 ? node.width : values[0], values[1] == 0 ? node.height : values[1]);
                    }
                    else {
                        figma.notify("No Changes neccessary!");
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'ELLIPSE':
                {
                    // // console.log('ELLIPSE');
                    let values = checkDev([node.width, node.height], behavior, gridValue);
                    if (values[0] != 0 || values[1] != 0) {
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        figma.notify("Changed:" + snackMsgW + snackMsgH);
                        node.resize(values[0] == 0 ? node.width : values[0], values[1] == 0 ? node.height : values[1]);
                    }
                    else {
                        figma.notify("No Changes neccessary!");
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'POLYGON':
                {
                    // console.log('POLYGON is not supported, yet 😅');
                    figma.notify("POLYGON is not supported, yet 😅");
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'STAR':
                {
                    // console.log('STAR is not supported, yet 😅');
                    figma.notify("STAR is not supported, yet 😅");
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'LINE':
                {
                    // console.log('LINE');
                    let values = checkDev([node.width, node.height, node.strokeWeight], behavior, gridValue);
                    // console.log(values);
                    if (values[0] != 0 || values[1] != 0 || values[2] != 0) {
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgS = values[2] == 0 ? "" : " Stroke: " + node.strokeWeight + "->" + values[2];
                        if (values[0] != 0 && values[1] != 0) { //its width
                            figma.notify("Changed:" + snackMsgW + snackMsgH + snackMsgS);
                            node.resize(values[0] == 0 ? node.width : values[0], 0);
                            node.strokeWeight = values[2] == 0 ? node.strokeWeight : values[2];
                        }
                        else {
                            figma.notify("No Changes neccessary!");
                        }
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'VECTOR':
                {
                    // console.log('VECTOR');
                    let values = checkDev([node.width, node.height, node.strokeWeight], behavior, gridValue);
                    // console.log(values);
                    if (values[0] != 0 || values[1] != 0 || values[2] != 0) {
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgS = values[2] == 0 ? "" : " Stroke: " + node.strokeWeight + "->" + values[2];
                        figma.notify("Changed:" + snackMsgW + snackMsgH + snackMsgS);
                        if (values[0] > values[1]) { //its width
                            node.resize(values[0] == 0 ? node.width : values[0], values[1] == 0 ? values[2] : values[1]);
                        }
                        else if (values[0] > values[1]) { // its height
                            node.resize(values[0] == 0 ? values[2] : values[0], values[1] == 0 ? node.height : values[1]);
                        }
                        node.strokeWeight = values[2] == 0 ? node.strokeWeight : values[2];
                    }
                    else {
                        figma.notify("No Changes neccessary!");
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #####
            case 'TEXT':
                {
                    // console.log('TEXT');
                    // let values = checkDev([node.width, node.height, node.fontSize], behavior, gridValue);
                    // // console.log(values);
                    // // console.log(node.characters.length);
                    // // console.log(node);  
                    //figma.notify("Text is not supported, yet 😅");   
                    let values = checkDev([node.width, node.height], behavior, gridValue);
                    if (values[0] != 0 || values[1] != 0) {
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        figma.notify("Changed:" + snackMsgW + snackMsgH);
                        node.resize(values[0] == 0 ? node.width : values[0], values[1] == 0 ? node.height : values[1]);
                    }
                    else {
                        figma.notify("No Changes neccessary!");
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            case 'FRAME':
                {
                    // console.log('FRAME');
                    let values = checkDev([node.width, node.height], behavior, gridValue);
                    if (values[0] != 0 || values[1] != 0) {
                        let snackMsgH = values[1] == 0 ? "" : " H: " + node.height + "->" + values[1];
                        let snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
                        figma.notify("Changed:" + snackMsgW + snackMsgH);
                        node.resize(values[0] == 0 ? node.width : values[0], values[1] == 0 ? node.height : values[1]);
                    }
                    else {
                        figma.notify("No Changes neccessary!");
                    }
                }
                break;
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            default:
                {
                    // console.log('UNKNOWNS');
                    // not supported, silently do nothing
                    figma.notify("This is an unknown type, Sorry!");
                }
                break;
        }
    });
}
// ---------------------------------------------------------------
// Check Deviation - primitve
// ---------------------------------------------------------------
// function checkDeviation(value, behavior, gridValue) {
//   if( value%gridValue != 0 ){ 
//     // console.log("__--> Return: " + Math.round(value / gridValue) * gridValue);
//     return Math.round(value / gridValue) * gridValue;
//   }else{
//     // console.log("__--> Return: " + 0);
//     return 0;
//   }
// }
// ---------------------------------------------------------------
// Check Deviation — elegant 
// ---------------------------------------------------------------
function checkDev(values, behavior, gridValue) {
    let newArray = values.map(item => {
        if (item % gridValue != 0 || item == 0) {
            let roundVal = Math.round(item / gridValue);
            return (roundVal == 0 ? 1 : roundVal) * gridValue;
        }
        else {
            // console.log("__--> Return: " + 0);
            return 0;
        }
    });
    // console.log(newArray);
    return newArray;
}
// add and reduce the width with the grid value
function plusW(node, behavior, gridValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('__Type:' +   node.type );  
        let values = checkDev([node.width], behavior, gridValue);
        let snackMsgW = "";
        if (values[0] != 0) {
            snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
            node.resize((values[0] == 0 ? node.width : values[0]) + gridValue, node.height);
            figma.notify("Changed:" + snackMsgW + " + gridvalue (" + gridValue + ")");
        }
        else {
            node.resize((node.width) + gridValue, node.height);
        }
    });
}
function minusW(node, behavior, gridValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('__Type:' +   node.type );  
        let values = checkDev([node.width], behavior, gridValue);
        let snackMsgW = "";
        if (values[0] != 0) {
            snackMsgW = values[0] == 0 ? "" : " W: " + node.width + "->" + values[0];
            node.resize((values[0] == 0 ? node.width : values[0]) - gridValue, node.height);
            figma.notify("Changed: " + node.width + " - gridvalue (" + gridValue + ")");
        }
        else {
            node.resize((node.width) - gridValue, node.height);
        }
    });
}
// add and reduce the height with the grid value
function plusH(node, behavior, gridValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('__Type H:' +   node.type );  
        let snackMsgH = "";
        let values = checkDev([node.height], behavior, gridValue);
        if (values[0] != 0) {
            snackMsgH = values[0] == 0 ? "" : " H: " + node.height + "->" + values[0];
            node.resize(node.width, (values[0] == 0 ? node.height : values[0]) + gridValue);
            figma.notify("Changed:" + snackMsgH + " + gridvalue (" + gridValue + ")");
        }
        else {
            node.resize(node.width, (node.height) + gridValue);
        }
    });
}
function minusH(node, behavior, gridValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('__Type H:' +   node.type );  
        let snackMsgH = "";
        let values = checkDev([node.height], behavior, gridValue);
        if (values[0] != 0) {
            snackMsgH = values[0] == 0 ? "" : " H: " + node.height + "->" + values[0];
            node.resize(node.width, (values[0] == 0 ? node.height : values[0]) - gridValue);
            figma.notify("Changed:" + snackMsgH + " - gridvalue (" + gridValue + ")");
        }
        else {
            node.resize(node.width, (node.height) - gridValue);
        }
    });
}

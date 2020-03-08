figma.showUI(__html__);
//figma.resize(100, 200);
figma.ui.onmessage = msg => {
  
  // if (msg.type === 'info') {
  //   console.log("Seleted Objects: ");
  //   console.log(figma.currentPage.selection);
  //   let node = figma.currentPage.selection;
  //   console.log("Object types description: ");
  //   figma.currentPage.selection.forEach(function(selection) {
  //     console.log(selection.type);
  //   });
  //   console.log("—————————————————————————————————");
  //   //console.log(node.name); // undefined
  //     //let lineh = node.lineHeight["value"];
  //     //let lineh = node.fontSize;
  //   //console.log(node.characters);
  // }


  if (msg.type === 'control') {
    // it loops through multiple selection
    let gridValue = msg.gridValue;
    let behavior = msg.behavior;
    if( !isNaN(gridValue)){
      Promise.all(figma.currentPage.selection.map(selected => correct(selected, behavior, gridValue)));  
    }else{
      figma.notify("Please input a number");
    }
  }
  
  // if (msg.type === 'cancel') {
  //   // it loops through multiple selection
  //   figma.closePlugin();
  // }
};


// ---------------------------------------------------------------
// Correct Objects
// ---------------------------------------------------------------
async function correct(node, behavior, gridValue) {
  // console.log( node );
  // console.log( "______________________________");
  // console.log( "Correcting: ");
console.log('__Type:' +   node.type );  


  switch (node.type) {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'RECTANGLE': {
      console.log('RECTANGLE');
      let values = checkDev([node.width, node.height], behavior, gridValue);
      if( values[0] != 0 || values[1] != 0 ){
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        figma.notify("Changed:" + snackMsgW + snackMsgH);  
        node.resize(values[0]==0?node.width:values[0], values[1]==0?node.height:values[1]);    
      }else {
        figma.notify("No Changes neccessary!");
      }
    } 
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'ELLIPSE': {
      console.log('ELLIPSE');
      let values = checkDev([node.width, node.height], behavior, gridValue);
      if( values[0] != 0 || values[1] != 0 ){
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        figma.notify("Changed:" + snackMsgW + snackMsgH);  
        node.resize(values[0]==0?node.width:values[0], values[1]==0?node.height:values[1]);    
      }else {
        figma.notify("No Changes neccessary!");
      }
    } 
    break;
   
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'POLYGON': {
      console.log('POLYGON is not supported, yet 😅');
      figma.notify("POLYGON is not supported, yet 😅");   
    }
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'STAR': {
      console.log('STAR is not supported, yet 😅');
      figma.notify("STAR is not supported, yet 😅");   
    }
    break;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'LINE': {
      console.log('LINE');
      let values = checkDev([node.width, node.height, node.strokeWeight], behavior, gridValue);
      console.log(values);
      if( values[0] != 0 || values[1] != 0 || values[2] != 0 ){
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgS =  values[2]==0?"":" Stroke: " + node.strokeWeight + "->" + values[2];
        if(values[0]!=0 && values[1]!=0){ //its width
          figma.notify("Changed:" + snackMsgW + snackMsgH + snackMsgS);  
          node.resize(values[0]==0?node.width:values[0], 0);
          node.strokeWeight = values[2]==0?node.strokeWeight:values[2];    
        } else {
        figma.notify("No Changes neccessary!");
      }
    }
  }
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'VECTOR': {
      console.log('VECTOR');
      let values = checkDev([node.width, node.height, node.strokeWeight], behavior, gridValue);
      console.log(values);
      
      if( values[0] != 0 || values[1] != 0 || values[2] != 0 ){
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgS =  values[2]==0?"":" Stroke: " + node.strokeWeight + "->" + values[2];
        figma.notify("Changed:" + snackMsgW + snackMsgH + snackMsgS);  
      
        if(values[0] > values[1]){ //its width
          node.resize(values[0]==0?node.width:values[0], values[1]==0?values[2]:values[1]);
        } else if (values[0] > values[1]){ // its height
          node.resize(values[0]==0?values[2]:values[0], values[1]==0?node.height:values[1]);
        }

        node.strokeWeight = values[2]==0?node.strokeWeight:values[2];    
      }else {
        figma.notify("No Changes neccessary!");
      } 
    }
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - #####
    case 'TEXT': {
      console.log('TEXT');
      // let values = checkDev([node.width, node.height, node.fontSize], behavior, gridValue);
      // console.log(values);
      // console.log(node.characters.length);
      // console.log(node);  
      //figma.notify("Text is not supported, yet 😅");   
      
      let values = checkDev([node.width, node.height], behavior, gridValue);
      if( values[0] != 0 || values[1] != 0 ){
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        figma.notify("Changed:" + snackMsgW + snackMsgH);  
        node.resize(values[0]==0?node.width:values[0], values[1]==0?node.height:values[1]);    
      }else {
        figma.notify("No Changes neccessary!");
      }
    }
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    case 'FRAME': {
      console.log('FRAME');
      let values = checkDev([node.width, node.height], behavior, gridValue);
      if( values[0] != 0 || values[1] != 0 ){
        let snackMsgH =  values[1]==0?"":" H: " + node.height  + "->" + values[1];
        let snackMsgW =  values[0]==0?"":" W: " + node.width   + "->" + values[0];
        figma.notify("Changed:" + snackMsgW + snackMsgH);  
        node.resize(values[0]==0?node.width:values[0], values[1]==0?node.height:values[1]);    
      }else {
        figma.notify("No Changes neccessary!");
      }
    }
    break;
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    default: {
      console.log('UNKNOWNS');
      // not supported, silently do nothing
      figma.notify("This is an unknown type, Sorry!");
    }
    break;
  }
  
}


// ---------------------------------------------------------------
// Check Deviation - primitve
// ---------------------------------------------------------------
function checkDeviation(value, behavior, gridValue) {
  if( value%gridValue != 0 ){ 
    console.log("__--> Return: " + Math.round(value / gridValue) * gridValue);
    return Math.round(value / gridValue) * gridValue;
  }else{
    console.log("__--> Return: " + 0);
    return 0;
  }
}

// ---------------------------------------------------------------
// Check Deviation — elegant 
// ---------------------------------------------------------------
function checkDev(values, behavior, gridValue) {
  let newArray = values.map( item => {
    if( item%gridValue != 0 || item == 0 ){   
      let roundVal = Math.round(item / gridValue)
      return (roundVal==0?1:roundVal) * gridValue;
    }else{
      console.log("__--> Return: " + 0);
      return 0;
    }
  });
  console.log(newArray);
  return newArray;
}


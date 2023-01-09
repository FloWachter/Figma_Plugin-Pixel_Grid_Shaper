import { on, once, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, AdjContent, adjH, adjW, adjWH, adjAutoLayout} from './types'

export default function () {  
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  on<AdjContent>('ADJUST_CONTENT', function (count: number, adjAutoLay: boolean) {
    console.log("adjAutoLay: ",adjAutoLay);

    figma.currentPage.selection.map(selected =>  {
      console.log("Selections: ",selected);
      console.log("Type: ",selected.type);

        const currHeight = selected.height;
        const currWidth = selected.width;
        const adjHeight = adjustValueToGrid(selected.height, count)
        const adjWidth = adjustValueToGrid(selected.width, count)
        selected.resize(adjWidth, adjHeight);    
        
        
        if(selected.type === 'FRAME' && selected.layoutMode !== 'NONE' && adjAutoLay === true) {
          selected.paddingLeft = adjustValueToGrid(selected.paddingLeft, count);
          selected.paddingRight = adjustValueToGrid(selected.paddingRight, count);
          selected.paddingTop = adjustValueToGrid(selected.paddingTop, count);
          selected.paddingBottom = adjustValueToGrid(selected.paddingBottom, count);
          selected.itemSpacing = adjustValueToGrid(selected.itemSpacing, count);
        }
  
        //looks for childrens inside a componentn and corrects all elemetns 
        if(selected.type === 'FRAME' || selected.type === 'COMPONENT' ){
          if (selected.children !== undefined ){
          selected.findAll(subs => {
              console.log(subs);
              const currHeight = subs.height;
              const currWidth = subs.width;
              const adjHeight = adjustValueToGrid(subs.height, count)
              const adjWidth = adjustValueToGrid(subs.width, count)
              subs.resize(adjWidth, adjHeight); 
    
              if(subs.type === 'FRAME' && subs.layoutMode !== 'NONE' && adjAutoLay === true) {
                subs.paddingLeft = adjustValueToGrid(subs.paddingLeft, count);
                subs.paddingRight = adjustValueToGrid(subs.paddingRight, count);
                subs.paddingTop = adjustValueToGrid(subs.paddingTop, count);
                subs.paddingBottom = adjustValueToGrid(subs.paddingBottom, count);
                subs.itemSpacing = adjustValueToGrid(subs.itemSpacing, count);
              }
          });
        }}
        figma.notify("Adjusted Content");  
      
    });
  })

  // Find the right number according to the grid number
  const adjustValueToGrid = (values:number, gridValue:number) => {
      let roundVal = Math.round(values / gridValue)
      return (roundVal==0?1:roundVal) * gridValue;
  }
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  on('ADJUST_WIDTH', function (count: number, scaleUp: boolean) {
    console.log("--> ADJUST_WIDTH", scaleUp);
    
    figma.currentPage.selection.map(selected =>  {
      let currHeight = selected.height;
      let adjWidth = adjustValueToGrid(selected.width, count)
      console.log("adjWidth: ", adjWidth);
      let val = scaleUp ? (adjWidth + count) : (adjWidth - count);
      if (val >= count){
        selected.resize(val, currHeight);  
      }else{
        figma.notify('You can not make it smaller!');
      }
    })
  });
  
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  on<adjH>('ADJUST_HIGHT', function (count: number, scaleUp: boolean) {
    figma.currentPage.selection.map(selected =>  {
      let currWidth = selected.width;
      let adjHeight = adjustValueToGrid(selected.height, count);
      console.log("adjHeight: ", adjHeight);
      let val = scaleUp ? (adjHeight + count) : (adjHeight - count);
      if (val >= count){
        selected.resize(currWidth, val);
      }else{
        figma.notify('You can not make it smaller!');
      }
    })
  })

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  on<adjWH>('ADJUST_WIDTH_HEIGHT', function (count: number, scaleUp: boolean) {
    console.log("--> ADJUST_WIDTH_HEIGHT", scaleUp);
      figma.currentPage.selection.map(selected =>  {
        let adjHeight = adjustValueToGrid(selected.height, count)
        let adjWidth = adjustValueToGrid(selected.width, count)
        let valW = scaleUp ? (adjWidth + count) : (adjWidth - count);
        let valH = scaleUp ? (adjHeight + count) : (adjHeight - count);  
        if (valW >= count && valH >= count){
          selected.resize(valW, valH);  
        }else{
          figma.notify('You can not make it smaller!');
        }
      })
  })

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  on<adjAutoLayout>('ADJUST_AUTOLAYOUT', function (count: number, scaleUp: boolean) {
    console.log("--> ADJUST_AUTOLAYOUT", scaleUp);
  
    figma.currentPage.selection.map(selected =>  {
      console.log("Selections: ",selected);
      console.log("Type: ",selected.type);

        if(selected.type === 'FRAME' && selected.layoutMode !== 'NONE') {
          selected.paddingLeft = scaleUp ? (adjustValueToGrid(selected.paddingLeft, count) + count) : (adjustValueToGrid(selected.paddingLeft, count) - count);
          selected.paddingRight = scaleUp ? (adjustValueToGrid(selected.paddingRight, count) + count) : (adjustValueToGrid(selected.paddingRight, count) - count)
          selected.paddingTop = scaleUp ? (adjustValueToGrid(selected.paddingTop, count) + count) : (adjustValueToGrid(selected.paddingTop, count) - count)
          selected.paddingBottom = scaleUp ? (adjustValueToGrid(selected.paddingBottom, count) + count) : (adjustValueToGrid(selected.paddingBottom, count) - count)
          selected.itemSpacing = scaleUp ? (adjustValueToGrid(selected.itemSpacing, count) + count) : (adjustValueToGrid(selected.itemSpacing, count) - count)
        }else{
          figma.notify("Pleae select a frame component!");  
        }
        //looks for childrens inside a componentn and corrects all elemetns 
        // if(selected.type === 'FRAME' || selected.type === 'COMPONENT' ){
        //   if (selected.children !== undefined ){
        //   selected.findAll(subs => {
        //       console.log(subs);
        //       if(subs.type === 'FRAME' && subs.layoutMode !== 'NONE') {
        //         subs.paddingLeft = scaleUp ? (adjustValueToGrid(subs.paddingLeft, count) + count) : (adjustValueToGrid(subs.paddingLeft, count) - count);
        //         subs.paddingRight = scaleUp ? (adjustValueToGrid(subs.paddingRight, count) + count) : (adjustValueToGrid(subs.paddingRight, count) - count)
        //         subs.paddingTop = scaleUp ? (adjustValueToGrid(subs.paddingTop, count) + count) : (adjustValueToGrid(subs.paddingTop, count) - count)
        //         subs.paddingBottom = scaleUp ? (adjustValueToGrid(subs.paddingBottom, count) + count) : (adjustValueToGrid(subs.paddingBottom, count) - count)
        //         subs.itemSpacing = scaleUp ? (adjustValueToGrid(subs.itemSpacing, count) + count) : (adjustValueToGrid(subs.itemSpacing, count) - count)
        //       }
        //   });
        // }}
    });
  })

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  showUI({ height: 380, width: 210 })
  
}

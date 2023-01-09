(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, __spreadProps(__spreadValues({}, options), {
      themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
    }));
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_ui();
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    on("ADJUST_CONTENT", function(count, adjAutoLay) {
      console.log("adjAutoLay: ", adjAutoLay);
      figma.currentPage.selection.map((selected) => {
        console.log("Selections: ", selected);
        console.log("Type: ", selected.type);
        const currHeight = selected.height;
        const currWidth = selected.width;
        const adjHeight = adjustValueToGrid(selected.height, count);
        const adjWidth = adjustValueToGrid(selected.width, count);
        selected.resize(adjWidth, adjHeight);
        if (selected.type === "FRAME" && selected.layoutMode !== "NONE" && adjAutoLay === true) {
          selected.paddingLeft = adjustValueToGrid(selected.paddingLeft, count);
          selected.paddingRight = adjustValueToGrid(selected.paddingRight, count);
          selected.paddingTop = adjustValueToGrid(selected.paddingTop, count);
          selected.paddingBottom = adjustValueToGrid(selected.paddingBottom, count);
          selected.itemSpacing = adjustValueToGrid(selected.itemSpacing, count);
        }
        if (selected.type === "FRAME" || selected.type === "COMPONENT") {
          if (selected.children !== void 0) {
            selected.findAll((subs) => {
              console.log(subs);
              const currHeight2 = subs.height;
              const currWidth2 = subs.width;
              const adjHeight2 = adjustValueToGrid(subs.height, count);
              const adjWidth2 = adjustValueToGrid(subs.width, count);
              subs.resize(adjWidth2, adjHeight2);
              if (subs.type === "FRAME" && subs.layoutMode !== "NONE" && adjAutoLay === true) {
                subs.paddingLeft = adjustValueToGrid(subs.paddingLeft, count);
                subs.paddingRight = adjustValueToGrid(subs.paddingRight, count);
                subs.paddingTop = adjustValueToGrid(subs.paddingTop, count);
                subs.paddingBottom = adjustValueToGrid(subs.paddingBottom, count);
                subs.itemSpacing = adjustValueToGrid(subs.itemSpacing, count);
              }
            });
          }
        }
        figma.notify("Adjusted Content");
      });
    });
    const adjustValueToGrid = (values, gridValue) => {
      let roundVal = Math.round(values / gridValue);
      return (roundVal == 0 ? 1 : roundVal) * gridValue;
    };
    on("ADJUST_WIDTH", function(count, scaleUp) {
      console.log("--> ADJUST_WIDTH", scaleUp);
      figma.currentPage.selection.map((selected) => {
        let currHeight = selected.height;
        let adjWidth = adjustValueToGrid(selected.width, count);
        console.log("adjWidth: ", adjWidth);
        let val = scaleUp ? adjWidth + count : adjWidth - count;
        if (val >= count) {
          selected.resize(val, currHeight);
        } else {
          figma.notify("You can not make it smaller!");
        }
      });
    });
    on("ADJUST_HIGHT", function(count, scaleUp) {
      figma.currentPage.selection.map((selected) => {
        let currWidth = selected.width;
        let adjHeight = adjustValueToGrid(selected.height, count);
        console.log("adjHeight: ", adjHeight);
        let val = scaleUp ? adjHeight + count : adjHeight - count;
        if (val >= count) {
          selected.resize(currWidth, val);
        } else {
          figma.notify("You can not make it smaller!");
        }
      });
    });
    on("ADJUST_WIDTH_HEIGHT", function(count, scaleUp) {
      console.log("--> ADJUST_WIDTH_HEIGHT", scaleUp);
      figma.currentPage.selection.map((selected) => {
        let adjHeight = adjustValueToGrid(selected.height, count);
        let adjWidth = adjustValueToGrid(selected.width, count);
        let valW = scaleUp ? adjWidth + count : adjWidth - count;
        let valH = scaleUp ? adjHeight + count : adjHeight - count;
        if (valW >= count && valH >= count) {
          selected.resize(valW, valH);
        } else {
          figma.notify("You can not make it smaller!");
        }
      });
    });
    on("ADJUST_AUTOLAYOUT", function(count, scaleUp) {
      console.log("--> ADJUST_AUTOLAYOUT", scaleUp);
      figma.currentPage.selection.map((selected) => {
        console.log("Selections: ", selected);
        console.log("Type: ", selected.type);
        if (selected.type === "FRAME" && selected.layoutMode !== "NONE") {
          selected.paddingLeft = scaleUp ? adjustValueToGrid(selected.paddingLeft, count) + count : adjustValueToGrid(selected.paddingLeft, count) - count;
          selected.paddingRight = scaleUp ? adjustValueToGrid(selected.paddingRight, count) + count : adjustValueToGrid(selected.paddingRight, count) - count;
          selected.paddingTop = scaleUp ? adjustValueToGrid(selected.paddingTop, count) + count : adjustValueToGrid(selected.paddingTop, count) - count;
          selected.paddingBottom = scaleUp ? adjustValueToGrid(selected.paddingBottom, count) + count : adjustValueToGrid(selected.paddingBottom, count) - count;
          selected.itemSpacing = scaleUp ? adjustValueToGrid(selected.itemSpacing, count) + count : adjustValueToGrid(selected.itemSpacing, count) - count;
        } else {
          figma.notify("Pleae select a frame component!");
        }
      });
    });
    once("CLOSE", function() {
      figma.closePlugin();
    });
    showUI({ height: 380, width: 210 });
  }
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();

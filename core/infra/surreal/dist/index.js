"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// index.tsx
var todoList_exports = {};
__export(todoList_exports, {
  List: () => List
});
module.exports = __toCommonJS(todoList_exports);

// src/components/List/index.tsx
var import_antd = require("antd");
var import_jsx_runtime = require("react/jsx-runtime");
function List() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Button, { children: "Open Modal" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  List
});

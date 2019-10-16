"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var actions_1 = require("./products/actions");
var reducers_1 = require("./products/reducers");
var actions_2 = require("./user/actions");
var reducers_2 = require("./user/reducers");
var actions = __assign({}, actions_1["default"], actions_2["default"]);
exports.actions = actions;
var reducers = {
    products: reducers_1["default"],
    user: reducers_2["default"]
};
exports.reducers = reducers;

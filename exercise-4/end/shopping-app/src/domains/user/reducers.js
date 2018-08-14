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
var _a;
var redux_actions_1 = require("redux-actions");
var actions_1 = require("./actions");
var initialState = {
    shoppingCartItems: [],
    errorMessage: undefined
};
exports["default"] = redux_actions_1.handleActions((_a = {},
    _a[actions_1["default"].ADD_SHOPPING_CART_ITEM] = function (state, action) {
        var newItem = action.payload;
        return __assign({}, state, { shoppingCartItems: [].concat.apply([], state.shoppingCartItems.concat([newItem])) });
    },
    _a[actions_1["default"].REMOVE_SHOPPING_CART_ITEM] = function (state, action) {
        var itemToRemove = action.payload;
        var filteredItems = state.shoppingCartItems.filter(function (item) { return item.id !== itemToRemove.id; });
        return __assign({}, state, { shoppingCartItems: filteredItems });
    },
    _a), initialState);

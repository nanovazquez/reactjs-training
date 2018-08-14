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
var actions_2 = require("../user/actions");
var initialState = {
    items: undefined
};
exports["default"] = redux_actions_1.handleActions((_a = {},
    _a[actions_1["default"].FETCH_PRODUCTS] = function (state, action) {
        var products = action.payload;
        return __assign({}, state, { items: products });
    },
    _a[actions_2["default"].ADD_SHOPPING_CART_ITEM] = function (state, action) {
        var productInCart = action.payload;
        var filteredItems = state.items.filter(function (item) { return item.id !== productInCart.id; });
        return __assign({}, state, { items: filteredItems });
    },
    _a[actions_2["default"].REMOVE_SHOPPING_CART_ITEM] = function (state, action) {
        var itemToAdd = action.payload;
        return __assign({}, state, { items: [].concat.apply([], state.items.concat([itemToAdd])) });
    },
    _a), initialState);

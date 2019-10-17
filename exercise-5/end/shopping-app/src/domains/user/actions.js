"use strict";
exports.__esModule = true;
var redux_actions_1 = require("redux-actions");
var ADD_SHOPPING_CART_ITEM = 'ADD_SHOPPING_CART_ITEM';
var REMOVE_SHOPPING_CART_ITEM = 'REMOVE_SHOPPING_CART_ITEM';
exports["default"] = {
    ADD_SHOPPING_CART_ITEM: ADD_SHOPPING_CART_ITEM,
    REMOVE_SHOPPING_CART_ITEM: REMOVE_SHOPPING_CART_ITEM,
    addShoppingCartItem: redux_actions_1.createAction(ADD_SHOPPING_CART_ITEM),
    removeShoppingCartItem: redux_actions_1.createAction(REMOVE_SHOPPING_CART_ITEM)
};

"use strict";
exports.__esModule = true;
var redux_actions_1 = require("redux-actions");
var products_service_1 = require("../../services/products-service");
var FETCH_PRODUCTS = 'FETCH_PRODUCTS';
exports["default"] = {
    FETCH_PRODUCTS: FETCH_PRODUCTS,
    fetchProducts: redux_actions_1.createAction(FETCH_PRODUCTS, products_service_1["default"].getAll)
};

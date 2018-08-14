"use strict";
exports.__esModule = true;
var dummy_products_1 = require("./dummy-products");
function getAll(filter) {
    if (filter === void 0) { filter = ''; }
    return Promise.resolve(dummy_products_1["default"].filter(function (item) { return item.name.indexOf(filter) !== -1; }));
}
exports["default"] = {
    getAll: getAll
};

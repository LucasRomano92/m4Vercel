"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
router.get("/", product_controller_1.getProducts);
router.get('/category/:categoryId', product_controller_1.getProductsByCategoryId);
router.get("/:id", product_controller_1.getProductsById);
exports.default = router;

import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;


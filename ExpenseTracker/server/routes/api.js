import express from "express";

import {addTransaction,getTransactions,getTransactionById,updateTransaction,deleteTransaction,getSummary} from "../controllers/transactionsController.js";
import {addCategory,getCategories} from "../controllers/categoriesController.js"

const router = express.Router();


router.post("/transactions",addTransaction);
router.get("/transactions",getTransactions);
router.get("/transactions/:id",getTransactionById);
router.put("/transactions/:id",updateTransaction);
router.delete("/transactions/:id",deleteTransaction);

// summary routes
router.get("/summary",getSummary);

// category routes
router.post("/categories",addCategory);
router.get("/categories",getCategories);

export default router;
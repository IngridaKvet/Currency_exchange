import express from "express";
import { getExchangeRates, convertCurrency } from "../controllers/exchangeController.mjs"
const router = express.Router();

router.route("/exchange-rates/:base").get(getExchangeRates)
router.route("/convert").post(convertCurrency)

export default router;
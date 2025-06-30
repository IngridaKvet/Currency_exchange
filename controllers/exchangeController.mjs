// Fetch all exchange rates for a given base currency (e.g., USD, EUR).
import axios from "axios";
import { isCurrencyValid } from "../validCurrencies.mjs";
import dotenv from "dotenv";
dotenv.config();

export const getExchangeRates = async (req, res) => {
  try {
    const base = req.params.base.toUpperCase();

    if (!isCurrencyValid(base)) {
      return res.status(400).json({
        status: "400 Bad Request",
        message: "Invalid base currency",
      });
    }

    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;
    const response = await axios.get(url);
    const data = response.data;

    res.status(200).json({
      status: "success",
      base: data.base_code,
      rates: data.conversion_rates,
    });
  } catch (error) {
    res.status(500).json({
      status: "500 Internal Server Error",
      message: error.message,
    });
  }
};


export const convertCurrency = async (req, res) => {
  try {
    const inputFromReq = req.body;

    // Validate input
    if (!inputFromReq.base || !inputFromReq.target) {
      return res.status(400).json({
        status: "400 Bad Request",
        message: "Missing base or target currency",
      });
    }

    const base = inputFromReq.base.toUpperCase();
    const target = inputFromReq.target.toUpperCase();
    const amount = Number(inputFromReq.amount);

    if (!isCurrencyValid(base)) {
      return res.status(400).json({
        status: "400 Bad Request",
        message: "Invalid base currency",
      });
    }

    if (!isCurrencyValid(target)) {
      return res.status(400).json({
        status: "400 Bad Request",
        message: "Invalid target currency",
      });
    }

    if (!inputFromReq.amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        status: "400 Bad Request",
        message: "Amount must be a positive number",
      });
    }

    // Fetch exchange rates
    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;
    const response = await axios.get(url);
    const data = response.data;

    res.status(200).json({
      status: "success",
      base: base,
      target: target,
      amount: amount,
      convertedAmount: amount * data.conversion_rates[target]

    });
    
  } catch (error) {
    res.status(500).json({
      status: "500 Internal Server Error",
      message: error.message,
    });
  }
}
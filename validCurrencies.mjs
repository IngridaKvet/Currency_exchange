import axios from "axios";

let validCurrencies = [];

export const loadValidCurrencies = async () => {
  try {
    const res = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`
    );
    validCurrencies = res.data.supported_codes.map((entry) => entry[0]);
  } catch (err) {
    console.error("Failed to load valid currencies:", err.message);
    process.exit(1);
  }
};

export const isCurrencyValid = (code) => {
  return validCurrencies.includes(code.toUpperCase());
};

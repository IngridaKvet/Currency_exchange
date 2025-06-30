import dotenv from "dotenv";
import app from "./app.mjs";
import { loadValidCurrencies } from "./validCurrencies.mjs";

dotenv.config();
const port = process.env.PORT;

(async () => {
  try {

    await loadValidCurrencies();

    app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();




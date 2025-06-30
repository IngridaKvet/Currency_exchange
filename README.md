### Currency Exchange Backend Programming Task

This task will help practice backend development, API integration, and fundamental JavaScript concepts by creating a simple currency exchange rate service.

---

### **Task Overview**
Develop a backend application using **Node.js** and **Express.js** that fetches live currency exchange rates and performs currency conversions. Integrate a free currency exchange API, handle HTTP requests, and calculate converted amounts.

---

+ ### **Requirements**
+ 1. Create an Express.js server with the following endpoints:
   + **GET `/exchange-rates/:base`**:
     - Fetches exchange rates for a given base currency (e.g., USD, EUR).
   - **POST `/convert`**:
     - Accepts JSON input with a base currency, target currency, and amount.
     - Returns the converted amount.
+ 2. Use a free currency exchange API such as:
   - [ExchangeRate-API](https://www.exchangerate-api.com/)
   - [Exchangeratesapi.io](https://exchangeratesapi.io/)
+ 3. Implement error handling:
   - Handle invalid inputs (e.g., unsupported currencies or negative amounts).
   - Return appropriate HTTP status codes and messages.

---

### **Detailed Task Description**

+ #### **Step 1: Setup**
1. Initialize a Node.js project using `npm init`.
2. Install dependencies:
   ```bash
   npm install express axios
   ```

---

+ #### **Step 2: Build Endpoints**

+ ##### **Endpoint 1: `/exchange-rates/:base`**
- **Description**: Fetch live exchange rates for a given base currency.
+ **HTTP Method**: `GET`
+ **Example Request**:
  ```http
  GET /exchange-rates/USD
  ```
+ **Example Response**:
  ```json
  {
    "base": "USD",
    "rates": {
      "EUR": 0.85,
      "GBP": 0.75,
      "JPY": 110.0
    }
  }
  ```
+ **Logic**:
  1. Validate the base currency.
  2. Fetch data from the currency API.
  3. Return exchange rates or an error if the base currency is invalid.

---

+ ##### **Endpoint 2: `/convert`**
- **Description**: Convert an amount from one currency to another.
- **HTTP Method**: `POST`
- **Example Request**:
  ```http
  POST /convert
  Content-Type: application/json
  {
    "base": "USD",
    "target": "EUR",
    "amount": 100
  }
  ```
- **Example Response**:
  ```json
  {
    "base": "USD",
    "target": "EUR",
    "amount": 100,
    "convertedAmount": 85
  }
  ```
+ **Logic**:
  + 1. Validate input: Check if base currency, target currency, and amount are provided.
  + 2. Fetch exchange rates.
  + 3. Calculate the converted amount using the formula:
     \[
     \text{convertedAmount} = \text{amount} \times \text{exchangeRate}
     \]
  + 4. Return the result or an error for invalid input.

---

+ #### **Step 3: Error Handling**
+ 1. Return `400 Bad Request` for invalid inputs (e.g., unsupported currency codes or negative amounts).
+ 2. Return `500 Internal Server Error` if the API call fails.

---

+ ### **Extensions**
+ 2. Implement rate limiting to prevent abuse.
+ 3. Secure API keys using environment variables (`dotenv`).
---

This task introduces to backend API development, HTTP request handling, and external API integration, making it a practical and engaging learning experience.
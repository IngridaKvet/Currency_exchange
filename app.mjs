import express from "express";
import exchangeRouter from "./routes/exchangeRoutes.mjs";
import rateLimit from "express-rate-limit";
const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 3 req per min
  max: 3,
  message: {
    status: "fail",
    message: "Too many requests from this IP, please try again later."
  }
});

app.use(limiter);
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/", exchangeRouter);



export default app;





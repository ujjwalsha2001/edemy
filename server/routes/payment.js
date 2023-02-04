import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  callback,
  pay
} from "../controllers/payment";

router.post("/payment",  pay);
router.post('/payment',callback);

module.exports = router;

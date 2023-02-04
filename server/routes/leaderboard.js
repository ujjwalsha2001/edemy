import express from "express";
import formidable from "express-formidable";
import { alltime } from "../controllers/leaderboard";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers


router.get("/leaderboard/alltime", alltime);


module.exports = router;
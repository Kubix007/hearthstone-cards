import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users/me", protect, getMe); //Dodajac protect jako drugi argument zabezpieczamy endpoint

export default router;

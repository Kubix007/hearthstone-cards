import express from "express";
import {
  getDecks,
  setDeck,
  deleteDeck,
  updateDeck,
} from "../controllers/deckController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", protect, getDecks);
router.post("/", protect, setDeck);
router.delete("/:id", protect, deleteDeck);
router.put("/:id", protect, updateDeck); //Dodajac protect jako drugi argument zabezpieczamy endpoint

export default router;

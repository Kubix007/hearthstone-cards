import IDeck from "../interfaces/deckInterface";
import { Schema, model } from "mongoose";

const deckSchema = new Schema<IDeck>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    deckName: {
      type: String,
      required: true,
    },
    deckCode: {
      type: String,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    hero: {
      type: Object,
      required: true,
    },
    heroPower: {
      type: Object,
      required: true,
    },
    class: {
      type: Object,
      required: true,
    },
    cards: {
      type: [Object],
      required: true,
    },
    cardCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Deck = model<IDeck>("Deck", deckSchema);

import { Response } from "express";
import IUserRequest from "../interfaces/userReguestInterface";
import { Deck } from "../models/deckModel";

const asyncHandler = require("express-async-handler");

// @desc    Get decks
// @route   GET /api/decks
// @access  Private
export const getDecks = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const decks = await Deck.find({ user: req.user.id });

    res.status(200).json(decks);
  }
);

// @desc    Set decks
// @route   POST /api/decks
// @access  Private
export const setDeck = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const {
      deckCode,
      version,
      format,
      hero,
      heroPower,
      cards,
      cardCount,
      class: heroClass,
    } = req.body as {
      deckCode: string;
      version: string;
      format: string;
      hero: string;
      heroPower: string;
      class: string;
      cards: string;
      cardCount: string;
    };

    // if (!req.body.deckCode) {
    //   res.status(400);
    //   throw new Error("Please add a text field");
    // }

    const deck = await Deck.create({
      user: req.user.id,
      deckCode: deckCode,
      version: version,
      format: format,
      hero: hero,
      heroPower: heroPower,
      class: heroClass,
      cards: cards,
      cardCount: cardCount,
    });

    res.status(200).json(deck);
  }
);

// @desc    Update deck
// @route   PUT /api/deck/:id
// @access  Private
export const updateDeck = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const deck = await Deck.findById(req.params.id);

    if (!deck) {
      res.status(400);
      throw new Error("Deck not found");
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the deck user
    if (deck.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedDeck);
  }
);

// @desc    Delete deck
// @route   DELETE /api/deck/:id
// @access  Private
export const deleteDeck = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const deck = await Deck.findById(req.params.id);

    if (!deck) {
      res.status(400);
      throw new Error("Deck not found");
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the goal user
    if (deck.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    await deck.remove();

    res.status(200).json({ id: req.params.id });
  }
);

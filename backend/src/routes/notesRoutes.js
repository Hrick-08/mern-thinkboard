import express from "express"
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

// router.get("/", (req,res) => {
//     res.status(200).json({
//         message: "Your notes here"
//     })
// });
router.get("/", getAllNotes);

router.get("/:id", getNote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
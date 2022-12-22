import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivro);
router.put("/", LivroController.updateLivro)
router.delete("/:id", LivroController.deleteLivro);

router.post("/info", LivroController.createLivroInfo)
router.put("/info", LivroController.updateLivroInfo)
router.delete("/info/:id", LivroController.deleteLivroInfo)

router.post("/:id/avaliacao", LivroController.createAvaliacao)
router.delete("/:id/avaliacao/:index", LivroController.deleteAvaliacao)

export default router;

import express from "express";
import VendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", VendaController.createVenda)
router.get("/:id", VendaController.getVenda)
router.get("/", VendaController.getVendas)

export default router;

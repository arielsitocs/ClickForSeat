import express from "express";

import prisma from "../config/db.js";

const router = express.Router();

router.get("/getAll", async (req, res) => {
  try {
    const response = await prisma.saloon.findMany();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No se encontraron salones" });
    }
  } catch (error) {
    res.status(500).json({ message: `Error del servidor al traer los salones: ${error}` });
  }
})

export default router;
import express from "express";

import prisma from "../config/db.js";

const router = express.Router();

router.get("/getAll", async (req, res) => {
  try {
    const response = await prisma.seat.findMany();
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ message: "No se encontraron asientos" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Error al traer los asientos: ${error}` });
  }
})

export default router;

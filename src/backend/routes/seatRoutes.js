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

router.put("/updateMany", async (req, res) => {
  const { ids } = req.body;
  try {
    const response = await prisma.seat.updateMany({
      // actualiza todos los asientos que coincidan con un id de los ids enviados //
      where: {
        seatid: {
          in: ids
        }
      },
      data: {
        status: "unavailable"
      }
    })
    if (response) {
      const count = response.count;
      return res.status(200).json({ message: `${count} asientos reservados exitosamente` });
    }
  } catch (error) {
    return res.status(500).json({ message: `Error al reservar los asientos: ${error}` });
  }
})

export default router;

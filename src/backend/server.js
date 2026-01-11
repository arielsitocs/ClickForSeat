import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import saloonRoutes from "./routes/saloonRoutes.js";
import showRoutes from "./routes/showRoutes.js";
import seatRoutes from "./routes/seatRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/saloons", saloonRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/seats", seatRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
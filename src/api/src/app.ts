import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: process.env.CLIENT_URL }));

app.get("/", (req: Request, res: Response) => {
  res.send("Mensagem vinda de uma API containerizada!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

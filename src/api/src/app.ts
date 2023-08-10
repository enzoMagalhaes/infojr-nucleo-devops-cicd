import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ? process.env.PORT : 8080;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Mensagem vinda de uma API containerizada!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


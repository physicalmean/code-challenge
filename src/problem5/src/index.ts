import express from "express";
import bodyParser from "body-parser";
import resourceRouter from "./routes";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/resources", resourceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

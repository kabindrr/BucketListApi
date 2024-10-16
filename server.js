import express from "express";
import { mongooseDbConnection } from "./config/mongoDbConfig.js";
import morgan from "morgan";
import cors from "cors";
import { bucketRouter } from "./routes/bucketRouter.js";

const app = express();
const PORT = 3001;

//database
mongooseDbConnection();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/v1/bucketList", bucketRouter);

//static serving
import path from "path";
const _dirname = path.resolve();

//serve the static files from the node
app.use(express.static(path.join(_dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "index.html"));
});

console.log(_dirname);

app.listen(PORT, (error) => {
  error
    ? console.log("Server Error")
    : console.log(`Server connected at http://localhost:${PORT}`);
});

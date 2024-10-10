import express from "express";
import { mongooseDbConnection } from "./config/mongoDbConfig.js";
import morgan from "morgan";
import cors from "cors";
import { bucketRouter } from "./routes/bucketRouter.js";

const app = express();
const PORT = 3001;

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/v1/bucketList", bucketRouter);

//database
mongooseDbConnection();

app.listen(PORT, (error) => {
  error
    ? console.log("Server Error")
    : console.log(`Server connected at http://localhost:${PORT}`);
});

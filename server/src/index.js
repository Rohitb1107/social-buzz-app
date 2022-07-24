import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;

import postRoutes from "../routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://socialbuzz:social1107@cluster0.wjoas.mongodb.net/socialbuzz?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server starts running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });

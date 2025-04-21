import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(
    "A fun, student-focused platform to master Data Structures and Algorithms with interactive challenges and clear explanations. Built with React and Node.js for a seamless learning experience."
  );
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on 8080");
});

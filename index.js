const env = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const app = require("./src/app");

// environment variable/constant
env.config({ path: ".env" });
//mongodb conection

mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.g8sqash.mongodb.net/EcomBook?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then((con) => {
    console.log("DB connection successful ");
  });

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

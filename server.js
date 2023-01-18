require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const pool = require("./Server/configure/database")
const userRouter = require("./Server/api/users/user.router")

app.use(cors());
app.use(express.urlencoded({ extended: true })); //data from front end
app.use(express.json());
app.use("/api/users", userRouter);


app.listen(port, () => console.log(`Listening http://localhost:${port}`));

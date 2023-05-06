const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
require('dotenv').config();
app.use(express.json());

const userRouter = require('./Routes/userRoutes')
const inventoryRouter = require('./Routes/inventoryRoutes')
// const loginRouter = require('./Routes/loginRoutes')
// const adminRouter = require('./Routes/adminRoutes')



//Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI,
  {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));


//Routes
app.use("/api/user", userRouter)
app.use("/api/inventory", inventoryRouter)
// app.use("/api/login", loginRouter)
// app.use("/api/admin", adminRouter)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const express = require("express");
const app = express();
const port = 3001;
var mongoose = require("mongoose");
MONGODB_URI = "mongodb://localhost:27017";


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const cors = require("cors");
app.use(cors());

app.use(express.json());

// app.post("/Malik/Signup", async (req, res) => {
//   try {
//     const user = await new User(req.body);

//     user
//       .save()
//       .then((response) => {
//         console.log(response);
//         res.status(200).json({ status: response });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {
//     res.json({ status: "error" });
//   }
// });

// app.post("/Malik/login", async (req, res) => {
//   const result = await User.findOne({
//     full_name: req.body.full_name,
//     password: req.body.password,
//   })
//     .then((obj) => {
//       if (obj) {
//         res.json({ found: true, object: obj });
//       } else {
//         res.json({ found: false });
//       }
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.post("/Malik/addQuestion", async (req, res) => {
//   try {
//     const Q = await new Question(req.body);

//     Q.save()
//       .then((response) => {
//         console.log(response);
//         res.status(200).json({ status: response });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {
//     res.json({ status: "error" });
//   }
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
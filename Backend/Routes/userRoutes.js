
app.post("/Malik/Signup", async (req, res) => {
  try {
    const user = await new User(req.body);
    user
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).json({ status: response });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/Malik/login", async (req, res) => {
  const result = await User.findOne({
    full_name: req.body.full_name,
    password: req.body.password,
  })
    .then((obj) => {
      if (obj) {
        res.json({ found: true, object: obj });
      } else {
        res.json({ found: false });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});


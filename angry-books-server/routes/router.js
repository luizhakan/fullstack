const { Router } = require("express");
const { getLivros } = require("../controller/controller");
const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  res.send("Você fez uma requisição post!");
});

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição patch!");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição delete!");
});

module.exports = router;

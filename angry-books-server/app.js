const express = require("express");
const app = express();
const port = 3000;
const routerLivro = require("./routes/routes");

app.use(express.json());
app.use("/livros", routerLivro);
app.use("/", routerLivro);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

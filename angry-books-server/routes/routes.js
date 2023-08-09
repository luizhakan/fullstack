const { Router } = require("express");
const { getLivros, getLivroPorId, postLivro, patchLivro, deleteLivro } = require("../controller/controller");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivroPorId);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router;

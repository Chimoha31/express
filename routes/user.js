const express = require("express");
// expressでrouterの設計をする為には、routerとして変数を用意してexpress.Router()関数を格納しておく。
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is User");
});
router.get("/info", (req, res) => {
  res.send("This is User Info!!")
});

// "/:idとするだけで、ランダムなidを取得できる。"
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得`)
});

// どこでも使えるようにexportする
module.exports = router;
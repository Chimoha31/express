// インストールしたexpressを呼び出す
const express = require("express");
// とりあえずappという変数の中に入れてインスタンス化しておく
const app = express();
const PORT = 3000;

// get(), post(), patch(), delete()を使っていく
app.get("/", (req, res) => {
  // console.log("Hello express2");
  // res.send("<h1>こんにちは</h1>");

  // res.sendStatus(500);
  // res.sendStatus(404); 

  // res.status(500).send("Error")
  res.status(500).json({msg: "This is error"});
})
app.get("/user", (req, res) => {
  res.send("This is User");
});
app.get("/user/info", (req, res) => {
  res.send("This is Info!!")
})

// expressを使ってlocalサーバーを立ち上げる。その為にはlisten()という関数を使用
app.listen(PORT, () => console.log("Server was activated"));

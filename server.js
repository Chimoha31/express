// インストールしたexpressを呼び出す
const express = require("express");
// とりあえずappという変数の中に入れてインスタンス化しておく
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// get(), post(), patch(), delete()を使っていく
app.get("/", (req, res) => {
  // console.log("Hello express2");
  // res.send("<h1>こんにちは</h1>");
  // res.sendStatus(500);
  // res.sendStatus(404); 
  // res.status(500).send("Error")
  res.status(500).json({msg: "This is error"});
});

// ルーティング。
// app.use()を使用することで、エンドポイント(=/user)は共通として使い、その後のエンドポイントについてはuserRouterに任せるというルーティング設計をする事ができる。
app.use("/user", userRouter);


// expressを使ってlocalサーバーを立ち上げる。その為にはlisten()という関数を使用
app.listen(PORT, () => console.log("Server was activated"));

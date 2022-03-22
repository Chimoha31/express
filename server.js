// インストールしたexpressを呼び出す
const express = require("express");
// とりあえずappという変数の中に入れてインスタンス化しておく
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// HTMLやcssのような静的なファイルを表示させるには、app.use(espress.static(フォルダ名))を使用し、フォルダ名(仮)publicの中にindex.htmlを作成。
app.use(express.static("public"));

// 又、テンプレートエンジンと呼ばれているexpress専用のものを使う事によって、動的なファイル(dataベースを読み込ませたり)も使う事ができる。
app.set("view engine", "ejs");

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

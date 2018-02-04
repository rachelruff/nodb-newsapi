const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const mainCtrl = require("./controllers/mainCtrl");

const app = express();

app.use(json());
app.use(cors());

app.get("/api/articles", mainCtrl.getArticles);
app.post('/api/post', mainCtrl.addArticle);
app.put('/api/put', putData);
app.delete('/api/delete/:id', mainCtrl.deleteArticle);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

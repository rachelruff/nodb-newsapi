const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const mainCtrl = require("./controllers/mainCtrl");

const app = express();

app.use(json());
app.use(cors());

app.get("/api/articles", mainCtrl.getArticles);
app.get('/api/getSaved', mainCtrl.getSaved);
app.post('/api/add', mainCtrl.saveArticle);
app.delete('/api/delete/:id', mainCtrl.deleteArticle);
app.put('/api/changeTitle/:id', mainCtrl.changeTitle);


const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

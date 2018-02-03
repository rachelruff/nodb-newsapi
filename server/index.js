const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const path = require('path');
const mainCtrl = require("./controllers/mainCtrl")

const app = express();

app.use(json());
app.use(cors());

app.get('/api/articles', mainCtrl.getArticles);
// app.post("/api/articles", mainCtrl.addArticles);
// app.delete("/api/articles/:id", mainCtrl.destroyArticles);



const port = 3001;
app.listen(port, () => {console.log(`Listening on port: ${port}`)})
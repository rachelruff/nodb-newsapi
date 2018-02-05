const axios = require("axios");
const baseURL = "https://newsapi.org/v2/top-headlines?country=us&category=";

const apiKey = "&apiKey=bcb046a2b4784c2caff07dbdb1aae077";

let articles = [];

const getArticles = (req, res, next) => {
  axios
    .all([
      axios.get(`${baseURL}business${apiKey}`),
      axios.get(`${baseURL}entertainment${apiKey}`),
      axios.get(`${baseURL}general${apiKey}`),
      axios.get(`${baseURL}health${apiKey}`),
      axios.get(`${baseURL}science${apiKey}`),
      axios.get(`${baseURL}sports${apiKey}`),
      axios.get(`${baseURL}technology${apiKey}`)
    ])
    .then(
      axios.spread((bus, ent, gen, health, sci, sports, tech) => {
        let newObject = {
          bus: bus.data,
          ent: ent.data,
          gen: gen.data,
          health: health.data,
          sci: sci.data,
          sports: sports.data,
          tech: tech.data
        };
        res.json(newObject);
      })
    );
};

const saveArticle = (req, res, next) => {
  articles.push(req.body);
  res.json(articles);
};

const deleteArticle = (req, res, next) => {
  const { title } = req.params;
  for (var i = 0; i < articles.length; i++) {
    if (articles[i].title === title) {
      objArr.splice(i, 1);
    }
  }
  res.json(articles);
};

const getSaved = (req, res, next) => {
  res.json(articles);
};
module.exports = {
  getArticles,
  saveArticle,
  deleteArticle,
  getSaved
};

//send up the array on this page

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

const addArticle = (req, res, next) => {
  articles.push(req.body);
  res.json(articles);
};

const deleteArticle = (req, res, next) => {
  const { id } = req.params;
  articles.splice(id, 1);
  res.json(articles);
};

module.exports = {
  getArticles,
  addArticle,
  deleteArticle
};

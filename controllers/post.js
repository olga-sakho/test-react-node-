const db = require("../models");
const Article = db.articles;

const postArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body)

    res.status(201).send(article)
  } catch (e) {
    res.send(e)
  }
}


module.exports = postArticle
  

const db = require("../models");
const Article = db.articles;

const patchArticle = async (req, res) => {
    try {
      const updatedArticle = await Article.update(req.body, {
        where: {
          id: req.params.id
        }
      })
  
      res.send()
    } catch (err) {
      res.send(err)
    }
  }
  
  module.exports = patchArticle
  
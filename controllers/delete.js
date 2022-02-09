const db = require("../models");
const Article = db.articles;

const deleteArticle = async (req, res) => {
    try {
      const deleted = await Article.destroy({
        where: {
          id: req.params.id
        }
      })
  
      res.code(204).send()
    } catch (err) {
      res.send(err)
    }
  }
  
  module.exports = deleteArticle
  
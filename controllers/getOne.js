const db = require("../models");
const Article = db.articles;

const getOne = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id)
    
        if (!article) return res.status(404).send()
    
        res.send(article)
      } catch (e) {
        res.send(e)
      }
}
    

module.exports = getOne
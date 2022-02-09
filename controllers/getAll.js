const db = require("../models");
const Article = db.articles;
    
const getAll = async (req, res) => {
    const where = {}
    if (req.query.param) {
        where.param = req.query.param 
        where.order = ['id', 'DESC']
    }
        try{
            const articles = await Article.findAll({ where })
            res.send(articles);
        }catch(err)  {
            res.send(err)   
        }
};

module.exports = getAll
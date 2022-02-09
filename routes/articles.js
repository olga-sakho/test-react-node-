module.exports = app => {
    const action = require("../controllers/index.js");
    var router = require("express").Router();

    router.post("/article/:id", action.postArticle);
   
    router.get("/articles", action.getAll);
    
    router.get("/article/:id", action.getOne);
   
    router.put("/article/:id", action.patchArticle);

    router.delete("/article/:id", action.deleteArticle);
  
    app.use('/+', router);
  };

module.exports = router
const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const port = 6001
const db = require("./app/models");
db.sequelize.sync();


app.set('view engine', 'ejs')

app.use('/+', articleRouter)



app.get('/+/articles',  (req, res) => {
    res.render('index')
  })


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
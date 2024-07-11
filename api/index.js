const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/database.js');
const userRouter = require('../routes/user.js');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//code here
app.use('/api',apiRouter)
app.use('/auth',authRouter)
app.get('*', (req,res) => {
  return res.status(404).send('This route is not in use.')
})

// Synchronize models
const port = 8000;

db.sequelize.sync().then((req)=>{
  app.listen(port,()=>{
      console.log(`Server Started at port ${port}`)
  })
})

module.exports =  app;
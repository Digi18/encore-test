const express = require('express');
const router = require('./routes/userRoutes');
require('dotenv').config();
const app = express();
const sequelize = require('./db/connection');

const port =  process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',router);

sequelize.sync()
.then((result) => {
    //console.log(result);
})
.catch((err) => {
    console.log("Error:",err);
});

//app.listen(port,() => console.log(`Server is running at ${port} port`));
module.exports = app;
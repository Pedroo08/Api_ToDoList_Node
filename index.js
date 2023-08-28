
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
require('dotenv').config()



app.use(cors())
app.use(express.json());


const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clustertask.7nnkg9w.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao BD')
    app.listen(8080, () => console.log("rodando"));

}).catch((err)=> console.log(err))


//Rotas
const TaskRoutes = require('./routes/TaskRoute')
app.use('/task',TaskRoutes)

app.get('/',(req,res) => {res.status(200).json( {message:"Funcionando!!!"})})

module.exports = app;









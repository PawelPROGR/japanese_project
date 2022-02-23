const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const todoRoutes = require('./routes/todos')

// var sql = require("mssql/msnodesqlv8")

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://PawelServer:Pawel132465798@cluster0.dcq7p.mongodb.net/AppJapanGO',
            {
                useNewUrlParser: true,
            }
        )
        app.listen(API_PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
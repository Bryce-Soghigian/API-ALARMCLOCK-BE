const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const URLROUTER = require('./Router/url-router')


//================INIT===================================//
const server = express();
const PORT = process.env.PORT || 5555;


server.use(helmet(),cors(),express.json());



server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

//==============Endpoints && Routers========================//
server.get("/", (req,res) => {
    res.json({"message":"Hey i am alive"})
})

server.use('/url',URLROUTER)


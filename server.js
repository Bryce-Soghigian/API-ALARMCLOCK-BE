const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios')
const URLROUTER = require('./Router/url-router')


//================INIT===================================//
const server = express();
const PORT = process.env.PORT || 5555;


server.use(helmet(),cors(),express.json());



server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

//========================================================

let arr = [];
const getOnInterval = () => {
    arr=[]
    axios.get("https://api-alarm-clock.herokuapp.com/url/urls")
    .then((res) => {

        arr.push(res.data)
        console.log(arr,"i am arr in getOnInterval")
    }).catch((err) => {
        console.error(err)
    })
    for(let i = 0;i<arr.length;I++){
        arr.push(arr[i])
    }
}
getOnInterval()

    const PingOnInterval = () => {
        for(let i = 0; i< arr.length;i++){
            axios.get(arr[0][i]["link"])
            .then((res) => {
                console.log(arr[i])
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
        }
    console.log(arr,"i am array in PingInterval")
    // console.log(arr[0])
    }

//==============Endpoints && Routers========================//
server.get("/", (req,res) => {
    res.json({"message":"Hey i am alive"})
})

server.use('/url',URLROUTER)


//=============Time=====================================//
setInterval(getOnInterval,9000000)
setImmediate((arg) => {

setInterval(PingOnInterval, 174000);
})

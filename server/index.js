const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.static('public'))
app.use(cors())


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'de11866eabf24cbdae25d088069516ea',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/say-hi', (req, res)=> {
    res.send('I am so proud of you')
    try{
        notAFunction(res)
    } catch (error){
        rollbar.log(error)
        Rollbar.critical('oopsy')
    }
    
})

const PORT = process.env.PORT || 4005


app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`)
})
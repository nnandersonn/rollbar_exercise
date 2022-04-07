const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())



app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/say-hi', (req, res)=> {
    res.send('I am so proud of you')
})

const PORT = process.env.PORT || 4005


app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`)
})
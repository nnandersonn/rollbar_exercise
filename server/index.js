const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const port = 3000

app.get('/say-hi', (req, res)=> {
    res.send('I am so proud of you')
})

app.listen(port, ()=> {
    console.log(`server listening on http://localhost:${port}`)
})
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./src/utils/dbConnection')
const bodyParser = require('body-parser')

dbConnect()

// Import routes
const userRouter = require('./src/routes/location.routs')

app = express()

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Asanka Gamage - location management Application Service working')
})

// Define routes for notes
app.use('/api/location', userRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.info(`Backend running on http://localhost:${PORT}`)
})

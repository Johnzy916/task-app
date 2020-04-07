const express = require('express')
require('./db/mongoose') // connect to database
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('The API is currently undergoing maintenance. Please check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) => {
    res.send('Task API - you might be in the wrong place!')
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, // needed for depracation
    useCreateIndex: true
}).catch(error => {
    console.log(error.message)
})
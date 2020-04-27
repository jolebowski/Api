const express = require('express')
const logger = require ('morgan')

const app = express()
  
app.use(logger('dev'))

app.use("/api/members", require('./routes/members'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is listenning in port ${PORT}`))
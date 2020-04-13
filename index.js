const express = require('express')
const members = require('./members')

const app = express()

//Get all members
app.get('/api/members', (req, res) => res.json(members))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is listenning in port ${PORT}`))
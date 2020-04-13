const express = require('express')
const members = require('./members')
const logger = require ('morgan')

const app = express()
  
app.use(logger('dev'))
//Get all members
app.get('/api/members', (req, res) => res.json(members))

//Get a single member
app.get('/api/member/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg: `Member with id number ${req.params.id} not found`})
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is listenning in port ${PORT}`))
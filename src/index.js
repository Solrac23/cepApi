const express = require('express')
const app = express()
const myCep = require('./services/api')

app.get('/', (req, res) => {
  
  res.send()
})

app.listen(3000, () => {
  console.log('Server is running!')
})
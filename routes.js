const express = require('express')
const routes = express.Router()
const cepPromise = require('cep-promise')


routes.get('/', async (req, res) => {
  const myCep = async (resolve) => {
    const response = await cepPromise(resolve)
    const { cep, state, city, neighborhood, street } = response
    const address =  {
      cep,
      state,
      city,
      neighborhood,
      street
    }
    return console.log(address)
  }
  res.render('index.ejs')
})

module.exports = routes
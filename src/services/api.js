const cepPromise = require('cep-promise')

const myCep = async (resolve) => {
  const response = await cepPromise(resolve)
  const { cep, state, city, neighborhood, street } = response
  const data =  {
    cep,
    state,
    city,
    neighborhood,
    street
  }
  return data
}

module.exports = myCep
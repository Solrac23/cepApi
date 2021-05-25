const cep = require('cep-promise')

const myCep = async (resolve) => {
  const response = await cep(resolve)
  console.log(response)
}

module.exports = myCep()
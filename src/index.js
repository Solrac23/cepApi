const express = require('express')
const app = express()
const routes = require('../routes')
const path = require('path')

//definir o template engine
app.set('engine views', 'ejs')

// definindo caminho para a pasta
app.set('views', path.join(__dirname, 'views'))
 
// habilitar arquivos statics
app.use(express.static(path.join(__dirname, 'public')))

// aceita json 
app.use(express.json())

//usar req.body
app.use(express.urlencoded({ extended: true }))

// rotas
app.use(routes)


app.listen(3000, () => {
  console.log('Server is running!')
})
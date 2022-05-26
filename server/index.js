require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware') 

const PORT = process.env.PORT || 3333;

const app = express()
app.use(cors())
app.use(express.json()) // чтобы можно было парсить json
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler) //обязательно в конце // обработка ошибок

const start = async () => {
  try {

  await sequelize.authenticate()
  await sequelize.sync() // сверяет состоянии БД со схемой данных
  app.listen(PORT, () => console.log('Server started on port 3333 !'));
  } catch(e) { // чтобы отлавливать ошибки и приложение не падало
    console.log(e)
  }
}


start()


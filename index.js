const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.SERVER_PORT


app.use(express.json())
app.use('/api', require('./api/users/Router'))
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/brands/Router'))
app.use('/api', require('./api/categories/Router'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.APP_PORT

app.get('/', (req, res) => {
  res.json({
    msg: 'client is running'
  })
})

app.listen(port, () => {
  console.log(`client running on port ${port}`)
})
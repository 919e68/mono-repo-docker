require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.API_PORT

app.get('/', (req, res) => {
  res.json({
    msg: 'server is running'
  })
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})
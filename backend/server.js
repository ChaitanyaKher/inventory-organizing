const express = require('express')
const productRoute = require("./router/product")
const { main } = require('./models')
const app = express()
const port = 4000

main()
app.use(express.json())

app.use("/api/product", productRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
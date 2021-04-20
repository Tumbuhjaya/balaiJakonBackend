const express = require('express')
const app = express()
const morgan = require('morgan')
const cors =require('cors')
const routing = require('./routing/index')



app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/', routing)

const port = 3008

app.listen(port, () => {
  console.log(`socket telah tersambung pada port : ${port}`)
});
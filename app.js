const express = require('express')
const app = express()
const morgan = require('morgan')
const cors =require('cors')
const routing = require('./routing/index')
const passport = require('passport')
// const fileUpload = require('express-fileupload')

// app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('Asset/Images'))

app.use('/', routing)

const port = 8805

app.listen(port, () => {
  console.log(` telah tersambung pada port : ${port}`)
});
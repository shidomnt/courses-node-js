const path = require('path')
const morgan = require('morgan')
const express = require('express')
const methodOverride = require('method-override')
const { create } = require('express-handlebars')
const route = require('./routes')

const db = require('./config/db')

db.connect()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

const hbs = create({
  extname: 'hbs',
  helpers: {
    addOne(number) {
      return number + 1
    }
  },
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

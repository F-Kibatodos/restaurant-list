const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurantList.results.find(item => {
    return item.id.toString() === req.params.id
  })
  res.render('show', { restaurant })
})

app.get('/search', (req, res) => {
  let keyword = req.query.keyword
  const targetRestaurant = restaurantList.results.filter(restaurant => {
    return (
      restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(keyword.toLowerCase())
    )
  })
  res.render('index', { restaurants: targetRestaurant, keyword })
})

app.listen(port, () => {
  console.log('We made it')
})

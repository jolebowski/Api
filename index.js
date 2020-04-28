const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const logger = require ('morgan')
const members = require('./members');


const app = express()
  
app.use(logger('dev'))

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parse Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

app.use("/api/members", require('./routes/members'))

const PORT = process.env.PORT || 3000

// Members API Routes
app.use('/api/members', require('./routes/members'));

app.listen(PORT, () => console.log(`server is listenning in port ${PORT}`))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
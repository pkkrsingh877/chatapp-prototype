const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override')
const morgan = require('morgan');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

//middleware (order matters )
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://localhost:27017/chatapp-prototype', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => {
    console.log("DB Connection Successful!")
})
.catch((error) => {
    console.log(error);
});

//setting up ejs
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//setting up routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes); 

app.get('/chat', (req, res) => {
    res.render('home/chat');
});

app.get('/', (req, res) => {
    res.render('home/index');
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
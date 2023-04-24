const path = require('path');
// require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http');
const routes = require('./controllers/api/apiRoutes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'mySecret',
  cookie: {
    maxAge: 3600000, // one hour in milliseconds
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize, // Pass the Sequelize instance here
  }),
};


app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Now Listening at ${PORT}!`));
});

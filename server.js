const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001

const hbs = exphbs.create({ helpers })

const sess = {
    secret:'',
    cookie: {
        // maxAge: , ADD AN AGE
        httpOnly: true,
        secure: false,
        //these two are the default for now..
    },
    // resave: ,
    // saveUnitialized: ,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(sess));

// EXPRESS USING HBS
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// SET TO 'public' AS STANDARD FOR NOW
app.use(expreess.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log`('Now Listening at ${PORT}!')`
    )}
)
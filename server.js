const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http');
const socketio = require('socket.io');
const routes = require('./controllers/api/apiRoutes.js');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const server = http.createServer(app);
const io = socketio(server);

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
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Socket.io code
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
  });

  socket.on('leaveRoom', ({ roomId }) => {
    socket.leave(roomId);
    console.log(`User left room ${roomId}`);
  });

  socket.on('message', ({ roomId, message }) => {
    console.log(`User sent message ${message} in room ${roomId}`);
    io.to(roomId).emit('message', { message });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Now Listening at ${PORT}!`));
});

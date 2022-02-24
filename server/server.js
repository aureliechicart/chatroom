const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

const db = {
  users: {
    'bouclierman@herocorp.io': {
      password: 'jennifer',
      username: 'John',
      color: '#c23616',
    },
    'acidman@herocorp.io': {
      password: 'fructis',
      username: 'Burt',
      color: '#009432',
    },
    'captain.sportsextremes@herocorp.io': {
      password: 'pingpong',
      username: 'Karin',
      color: '#f0f',
    }
  }
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((_, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// Server home page
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/login</code></li>
        <li><code>POST http://localhost:${port}/forgot</code></li>
        <li><code>GET http://localhost:${port}/theme/{email}</code></li>
      </ul>
    </div>
  `);
});


// Login with check: POST /login
app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  // Extracting data from request body
  const { email, password } = request.body;

  // Checking login and password with DB
  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  if (username) {
    console.log('<< 200 OK', username);
    response.json({
      pseudo: username,
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

// Forgotten password: POST /forgot
app.post('/forgot', (request, response) => {
  const { email } = request.body;
  if (db.users[email]) {
    response.json({
      pseudo: db.users[email].username
    });
  }
  else {
    response.status(400).end();
  }
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let color;
  if (db.users[email] && db.users[email].color) {
    color = db.users[email].color;
  }

  if (color) {
    console.log('<< 200 OK', email, color);
    response.json({
      color
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
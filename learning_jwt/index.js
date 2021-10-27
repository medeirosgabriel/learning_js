const http = require('http'); 
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const port = 9000
server.listen(port);
console.log(`Server listening on port ${port}...`)

const SECRET ='mysecret'
const jwt = require('jsonwebtoken');

app.get('/', (req, res, next) => {
    res.json({message: "Everything OK!"});
})

// Authentication
app.post('/login', (req, res, next) => {
    // This test below must be done on your database.
    if(req.body.user === 'gabriel' && req.body.password === '1234'){
      // Auth ok
      const id = 1; // This id would come from the database
      const token = jwt.sign({ id }, SECRET, {
        expiresIn: 300 // Expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Invalid Login!'});
})
	
app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      }
      // If everything is ok, save to request for later use
      req.userId = decoded.id;
      next();
    });
}

app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Returned all customers!");
    res.json([{id:1,nome:'gabriel'}]);
})
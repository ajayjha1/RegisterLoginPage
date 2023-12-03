const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// const secretKey = process.env.JWT_SECRET_KEY || 'defaultFallbackKey';
const secretKey ="MySuperSecretKeyForJWTAuthentication!#$%&*()"


const app = express();
const port = 5000

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://ajayjha1886:abcd1234@registerloginproject.6yea4ar.mongodb.net/?retryWrites=true&w=majority");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
  username: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    index: true,
  },
});

const User = mongoose.model('User', userSchema);

app.get('/api', async (req, res) => {
    res.json({message: "Hey you started your server"})
})

// Routes


//auth route


app.post('/register', async (req, res) => {
  const { name, username, password } = req.body;
  console.log(req.body);
  // Create a new user
  const user = new User({ name, username, password });
  await user.save();
//console.log(req.body);
  console.log("user registered successfully")
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password)
  // Find the user by username and password
  const user = await User.findOne({ username, password });
  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '7d' });
  res.json({ token });
});

const authenticateToken = (req, res, next) => {
    
    const token = req.headers.token;
    console.log(req.headers)
    console.log(secretKey)
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
    jwt.verify(token, secretKey, (err, user) => {
      console.log(err)
      if (err) {
        console.log(err)
        return res.status(403).json({ message: 'Forbidden' });
      }

      req.user = user;
      next();
    });
};

app.get('/home', authenticateToken, (req, res) => {
    console.log("----")
    res.json({ message: 'Welcome to the home page!', user: req.user });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

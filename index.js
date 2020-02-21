const express = require("express");
const app = express();

const port = 3000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to a basic express App running in Zeit Now!');
});

app.get('/another-page', (req, res) => {
  res.json({
    success: true,
    message: 'Hello World'
  });
});

// Listen on port 3000
app.listen(port, () => {
  console.log('Server started on port 3000');
});
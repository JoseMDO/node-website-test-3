const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/client'))
app.use(cors({ origin: '*' }));

app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})

// Load your JSON data
const favoritePlaces = require('./FavoritePlaces.json');

// Create a route that serves the JSON data
app.get('/api/favorite-places', (req, res) => {
  res.json(favoritePlaces);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


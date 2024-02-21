// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();
app.use(express.json());

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.json({ message: 'Comment created' });
});

// 4. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.json({ message: `Get comment with id ${req.params.id}` });
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.json({ message: `Update comment with id ${req.params.id}` });
});

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.json({ message: `Delete comment with id ${req.params.id}` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

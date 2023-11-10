// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Get all items
app.get('/items', (req, res) => {
  res.json(data);
});

// Get an item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.json(newItem);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  data = data.map((item) => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.json({ message: 'Item deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//created docker image tab in registory
// docker tag nodejs-crud localhost:5000/nodejs-crud
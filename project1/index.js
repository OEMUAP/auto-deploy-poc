// Require and configure dotenv
require('dotenv').config();
// index.js
const express = require('express');
const packageJson = require('./package.json');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
const packageDetail = {
  projectName: packageJson.name,
  version: packageJson.version
}
let data = [
  { id: 1, name: 'Item 1', test: 'test-1',...packageDetail },
  { id: 2, name: 'Item 2', test: 'test-1',...packageDetail },
  { id: 3, name: 'Item 3', test: 'test-1',...packageDetail },
  { id: 4, name: 'Item 4', test: 'test-1',...packageDetail },
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

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

//created docker image tab in registory
// docker tag nodejs-crud localhost:5000/nodejs-crud     
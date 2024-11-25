const express = require('express');
const fs = require('fs').promises

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {

    //example.txt is the file being read by the fs module
    const data = await fs.readFile('example.txt', 'utf-8');
    res.send(data);

  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
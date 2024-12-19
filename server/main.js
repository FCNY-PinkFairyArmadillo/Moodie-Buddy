const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({message: 'Hello from Node.js the other side!'});
    console.log('We are connected')
});

const PORT = 5000;
app.listen(PORT, (() => {
    console.log(`Server is running on http://localhost:${PORT}`);
}));
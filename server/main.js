const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());


app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Original Code

// app.get('/api', (req, res) => {
//     res.json({message: 'Hello from Node.js the other side!'});
//     console.log('We are connected')
// });

// const PORT = 5000;
// app.listen(PORT, (() => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// }));
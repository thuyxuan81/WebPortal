const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//Initialize Middleware

app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/engineeringAdmin', require('./routes/api/engineeringAdmin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require("express");

const app = express();

app.get('/', (req,res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
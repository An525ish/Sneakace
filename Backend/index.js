const express = require('express');
require('dotenv').config()



const app = express();

app.get('/', (req, res) => {
  res.json('success');
});



const PORT = process.env.PORT || 4040
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/*', express.static(__dirname, 'build/index.html'));

app.listen(PORT, () => {
  console.log(`Server started: ${port}`);
});

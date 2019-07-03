const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let lines = '';
  for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
      lines += `<p>${i} Soy Par!</p>`;
    } else {
      lines += `<p>${i} Soy Impar!</p>`;
    }
  }
  res.send(`${lines}`);
});

app.listen(3000, () => console.log('listening on port 3000'));
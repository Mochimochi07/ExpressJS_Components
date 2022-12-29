const express = require('express');
const app = express();

app.get('/', (req, res) => {
 
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Hello, World!</title>
      </head>
      <body>
        <div>
          <h1>Hello, World!</h1>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

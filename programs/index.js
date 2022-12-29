const express = require('express');
const app = express();


app.get('/', (req, res) => {
 
  const html = render(
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


function render(component) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Hello, World!</title>
      </head>
      <body>
        ${component}
      </body>
    </html>
  `;
}

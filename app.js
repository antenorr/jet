const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(morgan("dev"));


app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(200).location('/foo/bar').type('json').send( {"name": "Roudy"} );
})




app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log("your application has been launched !")
})


// const hostname= '127.0.0.1';
// server.listen(PORT, hostname, () => {
//   console.log(`Your Server is runnin on http://${hostname}:${PORT}/`);
// });

const dbhandler = require('./dbhandler');
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.route('/studyplan')
.post((req, res) => {
    res.status(200).json({ message: "POST completed;" });
})
.get((req, res) => {
    res.status(200).json({ message: "GET completed;" });
});

app.get("/CourseList", (req, res)=> {
  dbhandler.fetchCL((data)=> {res.status(200).json(data)});
})

app.get("/auth/login", (req, res) => {
  res.status(200).json({ message: "Hello from the server!" });
});

app.post("/auth/login", (req, res) => {
    res.status(200).json({ message: "Hello from the server!" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



const express = require("express");
const path = require("path");

const PORT = 8000;
const INTERFACE = "127.0.0.1";

const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.use('/', (req, res, next) => {
	console.log(req);
})

app.listen(PORT, INTERFACE, () => {
  console.log(`The server started on ${INTERFACE} port ${PORT}`);
});

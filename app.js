const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// connect to the database
const MONGO_URL = 'mongodb://127.0.0.1:27017/college_project'
main().then(() => {
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.get("/", (req, res) => {
    res.send("The server is working");
});



let port = 1009;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
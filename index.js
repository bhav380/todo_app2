const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

const bodyParser = require('body-parser');

var todoList = [{
    description: "hello",
    category: "personal",
    date: " ",
}];

module.exports = todoList;




//setting view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));



//parsing form data
app.use(bodyParser.urlencoded({ Extended: false }));

app.use('/', require('./routes'));

//using js and css files
app.use(express.static('assets'));



app.listen(port, function(err) {
    if (err) {
        console.log("Error connecting to server");
        return;
    }

    console.log("Successfully server connected to port number ", port);
})
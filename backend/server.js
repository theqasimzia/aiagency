const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
//configures dotenv to load the variables from your .env file. After this line, you can access your environment variables using process.env.

const app = express();
// initializes a new Express application by creating an instance of Express and storing it in the app variable. You’ll use this app object to define routes and middleware.

const PORT = process.env.PORT || 5000;
//This line sets the port number for your server. It first checks if there is a PORT environment variable (which might be set by your hosting environment), and if not, it defaults to 5000.

app.use(cors());
//This line adds the cors middleware to your Express app, allowing it to handle cross-origin requests. This is particularly important when your frontend and backend are hosted on different domains.

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParse: true, useUnifiedTopology: true})

.then( ()=> console.log('MongoDB Connected!'))
.catch( err => console.log(err));

//Connects to database, displays connection and check for error

app.get('/', (req,res) => {
    req.setEncoding('Hello MERN stack!');
}

app.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
})
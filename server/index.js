const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")

// mongoose connection
dotenv.config();

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    });


//middlewear connection
app.use(express.json());
app.use(helmet())
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)


//backend server
app.listen(8800, () => {
    console.log("Backend is on the mac Server")
})
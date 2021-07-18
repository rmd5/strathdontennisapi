const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

var corsOptions = {
    origin: [
        "http://localhost:3001",
        "http://localhost:3000"
    ]
}

app.use(cors(corsOptions))

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

const db = require("./app/models");

db.mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB.");
}).catch(err => {
    console.error("Connection error", err);
    process.exit();
});

app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to the Strathdon Tennis API." })
})

require('./app/routes/booking.routes')(app);

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}`)
})
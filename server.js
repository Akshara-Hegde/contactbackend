

const express = require('express');
const connectDB = require('./connectionDB/dbConnection');
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config();
const cors = require('cors')






connectDB();
const app = express();
app.use(cors())
const PORT =process.env.PORT;
app.use(express.json())

app.use("/api/users", require("./routes/userRoutes"));
app.use('/api/contacts/',require('./routes/route'))
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log("connected to server")
})

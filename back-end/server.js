const app = require('./src/app')
const dotenv = require('dotenv').config()
const connectDB = require('./src/utils/db')

dotenv.config();
connectDB();

const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{
    console.log("Server is listening at Port ", PORT)
})
const dotenv = require('dotenv')
dotenv.config();

const connectDB = require('./src/utils/db')
connectDB();

const app = require('./src/app')

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log("Server is listening at Port ", PORT)
})
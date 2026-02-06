const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const multerConfig = require('./utils/multerConfig')
const cookieParser = require('cookie-parser')


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api/users', userRouter)



module.exports = app
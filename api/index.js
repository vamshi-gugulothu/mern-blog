import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()
mongoose
.connect(
    process.env.MONGO
)
.then(() => {
    console.log('MongoDB is connected')
})
.catch((err) => {
    console.log(err)
})

const app = express()

app.listen(3000, () => {
    console.log('server is running on port 3000!')
})

app.use(express.json());
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err,req,res,next) =>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statuscode).json({
        success: false,
        statuscode,
        message,
    });
});
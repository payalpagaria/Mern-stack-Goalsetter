const express=require('express');
const dotenv=require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port=process.env.PORT||5000;

app.use('/api/goals',require('./routes/getRoutes'))
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`The server started on port ${port}`)
})

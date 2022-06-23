//import express
import express from 'express'
//import mangoose
import mongoose from 'mongoose'
//import cors
import cors from 'cors'
//import router
import route from './routes/routes.js';
//express function
const app = express();
//connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/businesses',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open',()=> console.log('Database Connected'));
// db.close()

// middleware
app.use(cors());
app.use(express.json());
app.use('/businesses', route)
// listening to port
app.listen(
  '8081', ()=>{
  console.log('Server is running on port 8081');
  console.log('http://localhost:8081');
});





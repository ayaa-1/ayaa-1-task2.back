 import  express  from 'express';
  const app = express();
  import cors from 'cors';
  app.use (cors());

  import " dotenv/ config";
 import  tasksroutes from './routes/router.js';
  app.use(express.json());
  app.use("/tasks",tasksroutes);
  app.get('/',(req, res)=>{
     res.send("WELCOME!")
  })
  
  import  mongoose from 'mongoose';
  import connectmongo from './config/connectmongo.js';
  connectmongo();
  mongoose.connect('mongodb+srv://ayaaml2005_db_user:ayaahmed@cluster0.heosstq.mongodb.net/Tasks?',{
   useNewUrlParser:true,
   useUnifiedTopology:true ,
  })
  .then(()=> console.log('connected successfully'))
  .catch ((err)=> console.log('error'));
  app. listen(3000,() =>
   {  console.log ("server run on 3000")
  })
  
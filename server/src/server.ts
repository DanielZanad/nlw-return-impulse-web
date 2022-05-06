import express from 'express';
import { routes } from './routes';
import cors from 'cors';
const app  = express();


const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(routes);


app.listen(3333, ()=>{
  console.log('HTTP server running');
})
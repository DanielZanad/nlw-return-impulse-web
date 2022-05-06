import express from 'express';
import { routes } from './routes';
import cors from 'cors';
const app  = express();


const allowedOrigins = ['https://nlw-return-impulse-web-virid.vercel.app/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(routes);


app.listen(process.env.PORT || 3333, ()=>{
  console.log('HTTP server running');
})
import { Router } from 'express';

const HomeWebApi = Router();

HomeWebApi.get('/', async function (req, res) {
   try {
      res.send('Hello');
   } catch (err) {
      res.send(err);
   }
})

export default function Home(app) {
   app.use('/api', HomeWebApi)
}
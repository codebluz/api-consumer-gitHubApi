import express from 'express';
import router from './routes/route.js';
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => { console.log(`Server is running on port ${port}`) });
app.use(express.json());
app.use(router);


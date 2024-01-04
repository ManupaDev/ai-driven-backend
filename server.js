import express from 'express';
import { predict } from './model.js';

const app = express();
app.use(express.static("dist"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.route("/model").get(predict)

app.listen(5000, () => console.log('Example app is listening on port 5000.'));

import express, { Request, Response } from 'express';
// import querystring from 'querystring';

import { calculateBmi } from "./bmiCalculator"
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req: Request, res: Response) => {
  const bmiHeight = parseInt(req.query.height as string);
  const bmiWeight = parseInt(req.query.weight as string);
  res.send(`${calculateBmi(bmiHeight, bmiWeight)}`)
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
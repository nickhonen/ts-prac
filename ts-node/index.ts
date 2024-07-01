import express, { Request, Response } from 'express';
import { calculateExercises, Result } from './exerciseCalculator';

import { calculateBmi } from "./bmiCalculator";
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req: Request, res: Response) => {
  const bmiHeight = parseInt(req.query.height as string);
  const bmiWeight = parseInt(req.query.weight as string);
  res.send(`${calculateBmi(bmiHeight, bmiWeight)}`);
});

app.post('/exercises', (req: Request, res: Response) => {
  console.log(req.body);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if ( !daily_exercises || !target ) {
    res.status(400).send({error: 'missing parameters'});
  } else if (typeof daily_exercises !== "object" || typeof target !== "number") {
    res.status(400).send({error: 'malformatted parameters'});
  }


  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const exerciseCalculation: Result = calculateExercises(daily_exercises, target);
  res.send({ exerciseCalculation });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
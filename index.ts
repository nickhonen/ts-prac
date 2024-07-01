import express from 'express';
import { calculateBmi } from "./bmiCalculator"
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (_req, res) => {
  res.send(`hardcoded bmi: ${calculateBmi(177, 82.1)}`)
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from 'express';
import diagnosisService from '../services/diagnosisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosisService.getDiagnoses());
});

router.post('/', (_req, res) => {
  res.send('Adding a patient!');
});

export default router;
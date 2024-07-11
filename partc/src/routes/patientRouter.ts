import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.post('/', (_req, res) => {
  res.send('Adding a patient!');
});

export default router;
import patients from "../../data/patients";
import { v4 as uuid } from 'uuid';
import { Patient, PatientWithoutSsn, NewPatientEntry } from "../types";

const getPatients = (): Patient[] => {
    return patients;
}

const getPatientsWithoutSsn = (): PatientWithoutSsn[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
}

const getPatient = (id: string): Patient | undefined => {
    return patients.find(patient => patient.id === id);
};

const addPatient = (patient: NewPatientEntry): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient
    };

    patients.push(newPatient);
    return newPatient;
}

export default {
    getPatients,
    getPatientsWithoutSsn,
    addPatient,
    getPatient
}
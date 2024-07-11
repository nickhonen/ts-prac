export type Gender = 'male' | 'female' | 'other';

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type PatientWithoutSsn = Omit<Patient, 'ssn'>;

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}


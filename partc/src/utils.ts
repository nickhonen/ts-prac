import { NewPatientEntry, Patient, Gender } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isEmptyString = (text: string): boolean => {
  return text.trim().length === 0;
};

const parseData = (data: unknown, name: string): string => {
  if (!isString(data)) {
    throw new Error(`Incorrect data in field: '${name}'`);
  }

  if (isEmptyString(data)) {
    throw new Error(`Missing value in field: '${name}'`);
  }
  return data;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender)) {
    throw new Error("Incorrect data in field: 'gender'");
  }

  if (isEmptyString(gender)) {
    throw new Error("Missing value in field: 'gender'");
  }

  switch (gender) {
    case "male":
      return Gender.Male;
    case "female":
      return Gender.Female;
    case "other":
      return Gender.Other;
    default:
      throw new Error(`Unknown gender: '${gender}'`);
  }
}

export const toNewPatient = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Missing patient data");
  }

  if ("name" in object && "ssn" in object && "occupation" in object && "dateOfBirth" in object && "gender" in object) {
      const newPatient: NewPatientEntry = {
        name: parseData(object.name, "name"),
        ssn: parseData(object.ssn, "ssn"),
        occupation: parseData(object.occupation, "occupation"),
        dateOfBirth: parseData(object.dateOfBirth, "dateOfBirth"),
        gender: parseGender(object.gender),
      };
      return newPatient;
    }
    throw new Error('Incorrect data: a field missing');
};

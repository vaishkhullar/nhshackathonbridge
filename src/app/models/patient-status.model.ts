export type PatientStatus = {
  id: number;
  mood: number;
  timestamp: Date;
  eating: string;
  drinking: string;
  toilet: string;
  mobility: string;
  sleep: string;
  fkSubmitter: number;
  fkPatientId: number;
  messageToFamily: string;
};

export type PatientStatusCreateDTO = {
  mood: number;
  timestamp: Date;
  eating: string;
  drinking: string;
  toilet: string;
  mobility: string;
  sleep: string;
  fkSubmitter: number;
  fkPatientId: number;
  messageToFamily: string;
};

export enum PatientHappiness {
  Happy = 1,
  OK = 2,
  Sad = 3
}

export const ILPMFreqHoursMultiplier = {
  [PatientHappiness.Happy]: { label: `Happy`, icon: "" },
  [PatientHappiness.OK]: { label: `OK`, icon: "" },
  [PatientHappiness.Sad]: { label: `Sad`, icon: "" },
}
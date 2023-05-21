export type PatientStatus = {
  mood: 1;
  timestamp: Date;
  eating: string;
  drinking: string;
  toilet: string;
  mobility: string;
  sleep: string;
  fkSubmitter: number;
  fkPatientId: number;
  messageToFamily: string;
  id: number;
};

export type PatientStatusCreateDTO = {
  mood: 1;
  eating: string;
  drinking: string;
  toilet: string;
  mobility: string;
  sleep: string;
  fkSubmitter: number;
  fkPatientId: number;
  messageToFamily: string;
};

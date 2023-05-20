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

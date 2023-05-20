export type PatientStatus = {
  id: number;
  message: string;
  fullName: string;
  createdAt: Date;
};

export type PatientStatusCreateDTO = {
  message: string;
};

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Environment
import { environment } from '../../../environments/environment';

//Models
import {
  PatientInfo,
  PatientStatus,
  PatientStatusCreateDTO,
} from '../../models/patient-status.model';

@Injectable({
  providedIn: 'root',
})
export class PatientAPIService {
  readonly apiEndpointName = 'patient';

  constructor(private http: HttpClient) {}

  public getPatientInfo(patientId: number): Observable<PatientInfo[]> {
    return this.http.get<PatientInfo[]>(
      `${environment.api.rootURL}/api/${this.apiEndpointName}/`,
      { params: { id: patientId } }
    );
  }
}

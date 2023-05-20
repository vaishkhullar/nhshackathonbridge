import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Environment
import { environment } from '../../../environments/environment';

//Models
import {
  PatientStatus,
  PatientStatusCreateDTO,
} from '../../models/patient-status.model';

@Injectable({
  providedIn: 'root',
})
export class PatientStatusAPIService {
  readonly apiEndpointName = 'patient-status';

  constructor(private http: HttpClient) {}

  public getPatientStatus(patientId: number): Observable<PatientStatus[]> {
    return this.http.get<PatientStatus[]>(
      `${environment.api.rootURL}/api/${this.apiEndpointName}/`,
      { params: { patientId } }
    );
  }

  public insertPatientStatus(
    payload: PatientStatusCreateDTO
  ): Observable<PatientStatus> {
    return this.http.post<PatientStatus>(
      `${environment.api.rootURL}/api/${this.apiEndpointName}/`,
      payload
    );
  }
}

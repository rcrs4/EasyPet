import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Appointment } from '../../../../common/appointment';

@Injectable()
export class AppointmentService{
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private epURL = 'http://localhost:3333';

    constructor(private http: HttpClient) {}

    getAppointment(): Observable<Appointment[]>{
        return this.http.get<Appointment[]>(this.epURL + "/horarios").pipe( 
            retry(2),
        ); 
    }

}
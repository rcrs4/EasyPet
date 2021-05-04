import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Pet } from '../../../../common/pet';

@Injectable()
export class PetService{
    // private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private epURL = 'http://localhost:3333';

    constructor(private http: HttpClient) {}

    getPets(): Observable<Pet[]>{
        return this.http.get<Pet[]>(this.epURL + "/pets").pipe( 
            retry(2),
        ); 
    }
}
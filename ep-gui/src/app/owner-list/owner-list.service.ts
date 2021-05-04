import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Owner } from '../../../../common/ownerList';

@Injectable()
export class OwnerListService{
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private epURL = 'http://localhost:3333';

    constructor(private http: HttpClient) {}

    getOwnerList(): Observable<Owner[]>{
        return this.http.get<Owner[]>(this.epURL + "/ownersList").pipe( 
            retry(2),
        ); 
    }

    ownerFilter(ownerAge: string): Observable<Owner[]>{
        return this.http.post<Owner[]>(this.epURL + "/ownerFilter",JSON.stringify({'age':ownerAge}), {headers: this.headers}).pipe( 
            retry(2),
        );
    }
}
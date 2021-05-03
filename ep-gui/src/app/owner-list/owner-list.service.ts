import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { OwnerList } from '../../../../common/ownerList';

@Injectable()
export class OwnerListService{
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private epURL = 'http://localhost:3333';

    constructor(private http: HttpClient) {}

    getOwnerList(): Observable<OwnerList[]>{
        return this.http.get<OwnerList[]>(this.epURL + "/lista de donos").pipe( 
            retry(2),
        ); 
    }

}
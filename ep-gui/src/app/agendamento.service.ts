import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Agendamento } from '../../../common/agendamento';

@Injectable()
export class AgendamentoService{
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private epURL = 'http://localhost:3333';

    constructor(private http: HttpClient) {}

    removeAgendamento(agendamento: Agendamento): Observable<Agendamento | null>{
        return this.http.post<any>(this.epURL + "/desmarcar",JSON.stringify(agendamento), {headers: this.headers}).pipe( 
            retry(2),
            map( res => {if (res.success) {return agendamento;} else {return null;}} )
        ); 
    }

    getAgendamentos(): Observable<Agendamento[]>{
        return this.http.get<Agendamento[]>(this.epURL + "/agendamentos").pipe( 
            retry(2),
        ); 
    }

}
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Dolar} from '../models/dolar';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Promise<Dolar[]> {
    return this.http.get<any>(`${environment.apiUrl}dolar/get`).toPromise();
  }

}

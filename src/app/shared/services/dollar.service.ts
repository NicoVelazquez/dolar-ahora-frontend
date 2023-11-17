import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Dollar} from '../models/dollar';

@Injectable({
  providedIn: 'root'
})
export class DollarService {

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Promise<Dollar[]> {
    return this.http.get<any>(`${environment.apiUrl}/dollar`).toPromise();
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {News} from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  public getTopEconomyNews(): Promise<News[]> {
    return this.http.get<any>(`${environment.apiUrl}/news/get-top-economy`).toPromise();
  }

  public getTopPoliticNews(): Promise<News[]> {
    return this.http.get<any>(`${environment.apiUrl}/news/get-top-politic`).toPromise();
  }

  public getNews(sectionName: string): Promise<News[]> {
    sectionName.toLowerCase() === 'economía' ? sectionName = 'economy' : undefined;
    sectionName.toLowerCase() === 'política' ? sectionName = 'politic' : undefined;
    return this.http.get<any>(`${environment.apiUrl}/news/get-${sectionName}`).toPromise();
  }

}

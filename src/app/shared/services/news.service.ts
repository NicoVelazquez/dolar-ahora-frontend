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

  public getNews(sectionName: string, numberOfResults: number): Promise<News[]> {
    sectionName.toLowerCase() === 'economía' ? sectionName = 'economy' : undefined;
    sectionName.toLowerCase() === 'política' ? sectionName = 'politic' : undefined;
    return this.http.get<any>(`${environment.apiUrl}/news/get-${sectionName}/${numberOfResults}`).toPromise();
  }

  public getNewsPaginated(sectionName: string, page: number, newsPerPage: number, topResults: number): Promise<any> {
    sectionName.toLowerCase() === 'economía' ? sectionName = 'economy' : undefined;
    sectionName.toLowerCase() === 'política' ? sectionName = 'politic' : undefined;
    return this.http.get<any>(`${environment.apiUrl}/news/get-${sectionName}/${page}/${newsPerPage}/${topResults}`).toPromise();
  }

}

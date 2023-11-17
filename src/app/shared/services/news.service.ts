import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {News} from '../models/news';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  firstEvaluatedKey: string | undefined;
  lastEvaluatedKey: string | undefined;

  constructor(private http: HttpClient) {
  }

  public reset(): void {
    this.firstEvaluatedKey = undefined;
    this.lastEvaluatedKey = undefined;
  }

  public getNews(numberOfResults: number): Promise<any> {
    return this.http.get<any>(`${environment.apiUrl}/news/latest?limit=${numberOfResults}`).toPromise();
  }

  public getNewsPaginated(sectionName: string, newsPerPage: number, order: string): Promise<any> {
    sectionName = sectionName.toLowerCase() === 'economía' ? 'economy' : 'politics';
    const evaluationKeyTimestamp = order === 'next' ? this.lastEvaluatedKey : this.firstEvaluatedKey;
    const evaluationKey = evaluationKeyTimestamp ? {section: sectionName, timestamp: evaluationKeyTimestamp} : undefined;

    const body = {
      section: sectionName,
      limit: newsPerPage,
      evaluationKey,
      order
    };

    return this.http.post<any>(`${environment.apiUrl}/news`, body)
      .pipe(
        map(response => {
          response.news.sort((a: { timestamp: any; }, b: { timestamp: any; }) => {
            const timestampA = Number(a.timestamp);
            const timestampB = Number(b.timestamp);
            return timestampB - timestampA;
          });

          this.firstEvaluatedKey = response.news.length > 0 ? response.news[0].timestamp : null;
          if (order === 'previous') {
            this.lastEvaluatedKey = response.news.length >= 5 ? response.news[5].timestamp : null;
          } else {
            this.lastEvaluatedKey = response.lastEvaluatedKey ? response.lastEvaluatedKey.timestamp : null;
          }

          return {news: response.news, hasNextPage: !!this.lastEvaluatedKey};
        })
      )
      .toPromise();
  }

}

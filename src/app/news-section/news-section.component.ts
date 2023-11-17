import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../shared/services/news.service';
import {News} from '../shared/models/news';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {

  static topResults = 4;
  static newsPerPage = 6;

  news: News[] | undefined;
  mainNews: News | undefined;
  top3News: News[] | undefined;

  section!: string;

  currentPage = 1;
  hasNextPage = true;


  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentPage = 1;
      this.section = params.sectionName;

      this.newsService.reset();

      this.newsService.getNews(NewsSectionComponent.topResults).then(news => {
        news = this.section === 'economía' ? news.economy : news.politics;
        this.mainNews = news[0];
        this.top3News = news.slice(1, 4);
      }).catch(() => this.router.navigate(['error']));

      this.newsService.getNewsPaginated(params.sectionName, NewsSectionComponent.newsPerPage, 'next').then(result => {
        this.news = result.news;
        this.hasNextPage = result.hasNextPage;
      }).catch(() => this.router.navigate(['error']));
    });
  }

  getNextPage(): void {
    this.currentPage++;
    this.newsService.getNewsPaginated(this.section, NewsSectionComponent.newsPerPage, 'next').then(result => {
      this.news = result.news;
      this.hasNextPage = result.hasNextPage;
    }).catch(() => this.router.navigate(['error']));
  }

  getPreviousPage(): void {
    this.currentPage--;
    this.newsService.getNewsPaginated(this.section, NewsSectionComponent.newsPerPage, 'previous').then(result => {
      this.news = result.news;
      this.hasNextPage = result.hasNextPage;
    }).catch(() => this.router.navigate(['error']));
  }

}

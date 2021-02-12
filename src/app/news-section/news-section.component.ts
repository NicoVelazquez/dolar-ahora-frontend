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

  news: News[] | undefined;
  mainNews: News | undefined;
  top3News: News[] | undefined;

  section: string | undefined;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.section = params.sectionName;

      this.newsService.getNews(params.sectionName).then(news => {
        this.mainNews = news[0];
        this.top3News = news.slice(1, 4);
        this.news = news.slice(4);
      }).catch(() => this.router.navigate(['error']));

    });

  }

}

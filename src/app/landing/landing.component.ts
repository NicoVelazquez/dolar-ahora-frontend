import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../shared/services/news.service';
import {News} from '../shared/models/news';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input() economyNews: News[] | undefined;
  @Input() politicNews: News[] | undefined;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getNews('economía', 3).then(news => {
      this.economyNews = news;
    });

    this.newsService.getNews('política', 3).then(news => {
      this.politicNews = news;
    });
  }

}

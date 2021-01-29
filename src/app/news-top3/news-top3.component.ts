import {Component, Input, OnInit} from '@angular/core';
import {News} from '../shared/models/news';

@Component({
  selector: 'app-news-top3',
  templateUrl: './news-top3.component.html',
  styleUrls: ['./news-top3.component.css']
})
export class NewsTop3Component implements OnInit {

  @Input() news: News[] | undefined;
  @Input() section: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}

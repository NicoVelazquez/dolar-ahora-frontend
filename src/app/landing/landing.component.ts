import {Component, OnInit} from '@angular/core';
import {DolarService} from '../shared/services/dolar.service';
import {Dolar} from '../shared/models/dolar';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  mainDolar: Dolar | undefined;
  dolars: Dolar[] = [];

  constructor(private dolarService: DolarService) {
  }

  ngOnInit(): void {
    this.dolarService.getAllProducts().then(dolars => {
      this.mainDolar = dolars[0];
      dolars.shift()
      this.dolars = dolars;
    });
  }

}

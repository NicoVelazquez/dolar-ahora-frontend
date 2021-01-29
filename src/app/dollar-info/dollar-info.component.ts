import {Component, OnInit} from '@angular/core';
import {Dollar} from '../shared/models/dollar';
import {DollarService} from '../shared/services/dollar.service';

@Component({
  selector: 'app-dollar-info',
  templateUrl: './dollar-info.component.html',
  styleUrls: ['./dollar-info.component.css']
})
export class DollarInfoComponent implements OnInit {

  mainDollarHoy: Dollar = {name: 'Dólar blue', sell: 0, buy: 0, date: new Date()};
  dollarsHoy: Dollar[] = [
    {name: 'DÓLAR OFICIAL PROMEDIO', sell: 0, buy: 0, date: new Date()},
    {name: 'DÓLAR BOLSA', sell: 0, buy: 0, date: new Date()},
    {name: 'CONTADO CON LIQUI', sell: 0, buy: 0, date: new Date()},
    {name: 'Dólar Solidario', sell: 0, buy: 0, date: new Date()}
  ];

  constructor(private dollarService: DollarService) {
  }

  ngOnInit(): void {
    this.dollarService.getAllProducts().then(dollars => {
      // @ts-ignore
      dollars.sort((a, b) => a.order - b.order);
      dollars.map(e => e.buy = +e.buy);

      this.mainDollarHoy = dollars[0];
      dollars.shift();
      this.dollarsHoy = dollars;
    });
  }

}

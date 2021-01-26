import {Component, OnInit} from '@angular/core';
import {Dollar} from '../shared/models/dollar';
import {DollarService} from '../shared/services/dollar.service';

@Component({
  selector: 'app-dollar-info',
  templateUrl: './dollar-info.component.html',
  styleUrls: ['./dollar-info.component.css']
})
export class DollarInfoComponent implements OnInit {

  mainDollarHoy: Dollar | undefined;
  dollarsHoy: Dollar[] = [];

  constructor(private dollarService: DollarService) {
  }

  ngOnInit(): void {
    this.dollarService.getAllProducts().then(dollars => {
      dollars.map(e => e.buy = +e.buy);

      this.mainDollarHoy = dollars[0];
      dollars.shift();
      this.dollarsHoy = dollars;
    });
  }

}

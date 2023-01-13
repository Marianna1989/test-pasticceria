import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent implements OnInit {
  day: any = 1;
  cheesecakePrezzo: string = '15.00';
  tiramisuPrezzo: string = '17.00';
  cupcakesPrezzo: string = '12.00';
  strudelPrezzo: string = '15.00';
  paradisoPrezzo: string = '18.00';
  fragolePrezzo: string = '15.00';

  ritirato: boolean = false;
  count: number = 1;
  constructor() { }
  ngOnInit(): void {
    if (sessionStorage.getItem('day') !== null) {
      console.log(sessionStorage.getItem('day'))
      this.day = sessionStorage.getItem('day');
      if (sessionStorage.getItem('day') === '2') {
        this.cheesecakePrezzo = this.calcolaPerc(15, 20);
        this.tiramisuPrezzo = this.calcolaPerc(17, 20);
        this.cupcakesPrezzo = this.calcolaPerc(12, 20);
        this.strudelPrezzo = this.calcolaPerc(15, 20);
        this.paradisoPrezzo = this.calcolaPerc(18, 20);
        this.fragolePrezzo = this.calcolaPerc(15, 20);
      }
      if (sessionStorage.getItem('day') === '3') {
        this.cheesecakePrezzo = this.calcolaPerc(15, 80);
        this.tiramisuPrezzo = this.calcolaPerc(17, 80);
        this.cupcakesPrezzo = this.calcolaPerc(12, 80);
        this.strudelPrezzo = this.calcolaPerc(15, 80);
        this.paradisoPrezzo = this.calcolaPerc(18, 80);
        this.fragolePrezzo = this.calcolaPerc(15, 80);
      }
      if (sessionStorage.getItem('day') === '4') {
        this.ritirato = true;
      }
      if (this.count > 4) {
        this.day = 4;
      }
    }

  }

  addOneDay() {
    this.day = this.day + 1;
    this.count = this.count + 1;
    sessionStorage.setItem('day', JSON.stringify(this.day));
    if (sessionStorage.getItem('day') === '2') {
      this.cheesecakePrezzo = this.calcolaPerc(15, 20);
      this.tiramisuPrezzo = this.calcolaPerc(17, 20);
      this.cupcakesPrezzo = this.calcolaPerc(12, 20);
      this.strudelPrezzo = this.calcolaPerc(15, 20);
      this.paradisoPrezzo = this.calcolaPerc(18, 20);
      this.fragolePrezzo = this.calcolaPerc(15, 20);
    }
    if (sessionStorage.getItem('day') === '3') {
      this.cheesecakePrezzo = this.calcolaPerc(15, 80);
      this.tiramisuPrezzo = this.calcolaPerc(17, 80);
      this.cupcakesPrezzo = this.calcolaPerc(12, 80);
      this.strudelPrezzo = this.calcolaPerc(15, 80);
      this.paradisoPrezzo = this.calcolaPerc(18, 80);
      this.fragolePrezzo = this.calcolaPerc(15, 80);
    }
    if (sessionStorage.getItem('day') === '4') {
      this.ritirato = true;
    }
    if (this.count > 4) {
      this.day = 4;
    }
  }

  calcolaPerc(tot: number, percentage: number) {
    var discountValue = (tot / 100) * percentage;
    var finalPrice = tot - discountValue;

    return finalPrice.toFixed(2);
  }

  resetDay() {
    this.day = 1;
    sessionStorage.clear();
    this.ritirato = false;
    this.cheesecakePrezzo = '15.00';
    this.tiramisuPrezzo = '17.00';
    this.cupcakesPrezzo = '12.00';
    this.strudelPrezzo = '15.00';
    this.paradisoPrezzo = '18.00';
    this.fragolePrezzo = '15.00';
  }
}

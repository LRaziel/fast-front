import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() buyButton: any;
  public dolarValue: any;
  public status: number = 0;

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.service.getDolarValue().subscribe((result: any) => {
      this.dolarValue = (this.data.value / result.USDBRL.high).toFixed(2);
    });

    if (this.data.quantity == 0) {
      this.status = 1;
    } else if (this.data.quantity < 10) {
      this.status = 2;
    } else {
      this.status = 3;
    }
  }

  buy() {
    sessionStorage.setItem('idProductOnBuy', this.data.id);
    this.router.navigateByUrl('buy', { state: this.data });
  }
}

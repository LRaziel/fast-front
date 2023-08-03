import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  public title: string = 'Compra de Produto';
  constructor(
    private builder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private location: Location,
    private toastr: ToastrService
  ) {}

  public selectedProduct: any;

  public buyForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    quantity: this.builder.control('', Validators.required),
  });

  ngOnInit(): void {
    this.selectedProduct = this.location.getState();
  }

  onBuy() {
    let buyRequest = {
      nameCustomer: this.buyForm.value.name,
      quantity: this.buyForm.value.quantity,
      productName: this.selectedProduct.name,
      productId: this.selectedProduct.id,
      nameSeler: this.selectedProduct.nameSeler,
    };

    if (this.buyForm.valid) {
      this.service.registerSale(buyRequest).subscribe((result) => {
        this.toastr.success('Compra efetuada com sucesso!');
      });

      this.router.navigate(['']);
    } else {
      this.toastr.warning(
        'Preencha todas as informações para prosseguir com a compra'
      );
    }
  }
}

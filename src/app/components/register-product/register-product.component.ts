import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
})
export class RegisterProductComponent implements OnInit {
  public categoriesList: any;
  public title: string = 'Cadastro de Produtos';

  constructor(
    private builder: FormBuilder,
    private service: ApiService,
    private toastr: ToastrService
  ) {}

  public productform = this.builder.group({
    name: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    value: this.builder.control('', Validators.required),
    category: this.builder.control('', Validators.required),
    quantity: this.builder.control('', Validators.required),
    nameSeler: sessionStorage.getItem('userName'),
  });

  ngOnInit(): void {
    this.getCategories();
  }

  proceedregister() {
    if (this.productform.valid) {
      this.service
        .registerProduct(this.productform.value)
        .subscribe((result) => {
          this.toastr.success('Produto cadastrado com sucesso!');
        });
    } else {
      this.toastr.warning('Ocorreu um erro, tente novamente!');
    }
  }

  getCategories() {
    this.service.getCategories().subscribe((result) => {
      this.categoriesList = result;
    });
  }
}

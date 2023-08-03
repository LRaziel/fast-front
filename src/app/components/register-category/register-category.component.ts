import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css'],
})
export class RegisterCategoryComponent {
  public title: string = 'Cadastro de Categorias';
  constructor(
    private builder: FormBuilder,
    private service: ApiService,
    private toastr: ToastrService
  ) {}

  categoryform = this.builder.group({
    name: this.builder.control('', Validators.required),
  });

  proceedregister() {
    if (this.categoryform.valid) {
      this.service
        .registerCategory(this.categoryform.value)
        .subscribe((result) => {
          this.toastr.success('Categoria cadastrada com sucesso!');
        });
    } else {
      this.toastr.warning('Ocorreu um erro, tente novamente!');
    }
  }
}

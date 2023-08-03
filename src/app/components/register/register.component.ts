import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  registerform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.registerUser(this.registerform.value).subscribe((result) => {
        this.toastr.success('Usuario Cadastrado com sucesso!');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Email ou senha invalidos, tente novamente!');
    }
  }
}

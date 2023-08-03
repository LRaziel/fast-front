import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public credential: FormGroup = this.builder.group({
    email: this.builder.control('', Validators.required),
    pssw: this.builder.control('', Validators.required),
  });

  public result: any;

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.credential.valid) {
      this.service
        .getUserbyEmail(this.credential.value.email)
        .subscribe((item) => {
          this.result = item;
          if (this.result[0].password === this.credential.value.pssw) {
            sessionStorage.setItem('userEmail', this.result[0].email);
            sessionStorage.setItem('password', this.result[0].password);
            sessionStorage.setItem('userName', this.result[0].name);
            this.router.navigate(['']);
          } else {
            this.toastr.error('Senha ou email incorretos');
          }
        });
    } else {
      this.toastr.warning('Tente um email e senha validos');
    }
  }
}

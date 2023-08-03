import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterCategoryComponent } from './components/register-category/register-category.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { BuyComponent } from './components/buy/buy.component';

const routes: Routes = [
  { component: HomeComponent, path: '', canActivate: [AuthGuard] },
  {
    component: RegisterCategoryComponent,
    path: 'register-cat',
    canActivate: [AuthGuard],
  },
  {
    component: RegisterProductComponent,
    path: 'register-prod',
    canActivate: [AuthGuard],
  },
  {
    component: BuyComponent,
    path: 'buy',
    canActivate: [AuthGuard],
  },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

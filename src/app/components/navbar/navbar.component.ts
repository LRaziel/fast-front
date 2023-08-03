import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[] | undefined;
  public isShow: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/',
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        url: '/dashboard',
      },
      {
        label: 'Cadastro',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Categoria',
            url: '/register-cat',
          },
          {
            label: 'Produtos',
            url: '/register-prod',
          },
        ],
      },
    ];
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.isShow =
          event.url == '/login' || event.url == '/register' ? false : true;
      }
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}

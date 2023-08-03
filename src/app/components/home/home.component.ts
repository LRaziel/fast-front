import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title: string = 'Produtos';
  public categoriesList: any;

  constructor(private builder: FormBuilder, private service: ApiService) {}

  public products: any;
  public searchform = this.builder.group({
    description: '',
    category: '',
  });

  ngOnInit(): void {
    this.initialFilter();

    this.getCategories();
    this.getProducts();
  }

  initialFilter() {
    this.searchform.reset();
  }

  getCategories() {
    this.service.getCategories().subscribe((result) => {
      this.categoriesList = result;
    });
  }

  getProducts() {
    let category = sessionStorage.getItem('category');
    let description = sessionStorage.getItem('description');

    category = category == 'undefined' ? '' : category;

    this.service
      .getProductsBySearch(category, description)
      .subscribe((result) => {
        this.products = result;
      });
    console.log('Get Products: ', this.products);
  }

  search() {
    console.log('Set filter', this.products);
    let category: any = this.searchform.value.category;
    let description: any = this.searchform.value.description;

    category = !category ? '' : category;
    description = !description ? '' : description;

    sessionStorage.setItem('category', category.name);
    sessionStorage.setItem('description', description);
    this.ngOnInit();
  }
}

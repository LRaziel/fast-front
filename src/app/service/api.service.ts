import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000';

  registerUser(inputdata: any) {
    return this.http.post(this.apiurl + '/user', inputdata);
  }

  registerProduct(inputdata: any) {
    return this.http.post(this.apiurl + '/product', inputdata);
  }

  registerCategory(inputdata: any) {
    return this.http.post(this.apiurl + '/category', inputdata);
  }

  registerSale(inputdata: any) {
    return this.http.post(this.apiurl + '/sale', inputdata);
  }

  updateProduct(inputdata: any, id: any) {
    return this.http.put(this.apiurl + '/product/' + id, inputdata);
  }

  deleteProduct(id: any) {
    return this.http.delete(this.apiurl + '/product/' + id);
  }

  getCategories() {
    return this.http.get(this.apiurl + '/category');
  }

  getUserbyEmail(email: any) {
    return this.http.get(this.apiurl + '/user?email=' + email);
  }

  getAllProducts() {
    return this.http.get(this.apiurl + '/product');
  }

  getPeoductById(id: any) {
    return this.http.get(this.apiurl + '/product/' + id);
  }

  getProductsBySearch(category: any, description: any) {
    if (category && !description) {
      return this.http.get(this.apiurl + '/product?category.name=' + category);
    } else if (!category && description) {
      return this.http.get(this.apiurl + '/product?q=' + description);
    } else if (!category && !description) {
      return this.getAllProducts();
    } else {
      return this.http.get(
        this.apiurl + '/product?category.name=' + category + '&q=' + description
      );
    }
  }

  getDolarValue() {
    return this.http.get(' https://economia.awesomeapi.com.br/last/USD-BRL');
  }

  isloggedin() {
    return sessionStorage.getItem('userEmail') != null;
  }
}

import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getAllProducts()
    {
      return this._http.get(environment.baseAPI);
    }

  getAllCategories()
    {
      return this._http.get(environment.baseAPI+'categories');
    }

  getFilteredProduct(key:string)
    {
      return this._http.get(environment.baseAPI+'category/'+key);
    }
  getSingleProduct(id:number){
    return this._http.get(environment.baseAPI+id)
  }
}

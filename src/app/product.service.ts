import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://192.168.1.24:7778/product/";
  constructor(private http:HttpClient) { }

  select()
  {
    return this.http.get(this.url);
  }
  insert(object)
  {
    return this.http.post(this.url,object);
  }
}

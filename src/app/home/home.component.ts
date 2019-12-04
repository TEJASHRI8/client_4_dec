import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any;
  constructor(private service:ProductService) { }

  ngOnInit() {
    var observableResult=this.service.select();
    observableResult.subscribe(result=>{
      console.log(result)
      this.products=result;
    })
  }

}

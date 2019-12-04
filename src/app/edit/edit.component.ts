import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products={"id":"",
  "title":"",
  "description1":"",
  "price":""}
  constructor(private router:Router,private route:ActivatedRoute,private service:ProductService) { }

  ngOnInit() {
  }

  Insert()
  {
    var observableResult=this.service.insert(this.products);
    
  }
}

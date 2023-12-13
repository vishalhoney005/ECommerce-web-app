import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: IProduct[];

  constructor(private dataservice:DataService, private router:Router){
    this.dataservice.getProducts().subscribe((response:IProduct[])=>{
      this.products = response;
    })
  }
  onButtonClicked(product:IProduct){
    this.router.navigate(['product-details',product.productId])
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any;
  product!: IProduct;
  constructor(private dataservice:DataService, private activatedRoute:ActivatedRoute) {
    this.id=activatedRoute.snapshot.paramMap.get('id')
     this.dataservice.getProductById(this.id).subscribe((response:IProduct)=>{
      this.product = response;
    })

}
}
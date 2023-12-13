import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories!: ICategory[];

  constructor(private dataservice:DataService){
    dataservice.getCategories().subscribe((response: ICategory[])=>{
      this.categories = response;
    })
  }
}

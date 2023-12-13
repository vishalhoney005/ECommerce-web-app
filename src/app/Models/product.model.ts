import { ICategory } from "./category.model";

export interface IProduct{
    productId:number;
    productTitle:string;
    productPrice:number;
    productDescription:string;
    productImage:string[];
    category:ICategory;
}
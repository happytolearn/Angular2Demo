import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component ({
    selector: 'products-component',
    templateUrl: './app/products/products.component.html',
    providers:[PostService]
})

export class ProductsComponent {
        Isshow:boolean =true;
		products:product;
        constructor(private postservice:PostService){ 
            this.postservice.getproducts().subscribe(products => {
            this.products=products;
        });
  }
}
interface product{
    playername:string;
    Avg:number;
    Rankings:number;
}
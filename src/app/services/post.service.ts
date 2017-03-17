import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService{
    constructor(private http:Http){
    }
    getposts()
    {
        return this.http.get('data.json').map(res => res.json());
    }
	getproducts()
    {
        return this.http.get('products.json').map(res => res.json());
    }
}
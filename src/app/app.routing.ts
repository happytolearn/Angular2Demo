import { DataComponent }  from './data/data.component';
import { AboutUsComponent }  from './aboutus/aboutus.component';
import { ProductsComponent }  from './products/products.component';

export const appRoutes = [
    
    {
       path:'',
       component: DataComponent
    },
    {
        path:'about',
        component: AboutUsComponent
    },
	{
        path:'products',
        component: ProductsComponent
    }
];

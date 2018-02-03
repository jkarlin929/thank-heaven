// in src/App.js

import React from 'react';
import { 
  jsonServerRestClient, 
  simpleRestClient, 
  fetchUtils, 
  Admin, 
  Resource, 
  Delete} from 'admin-on-rest';
import { AdminBrands, AdminBrandsEdit, AdminBrandsCreate } from './AdminBrands';
import { AdminReviews, AdminReviewsEdit, AdminReviewsCreate } from './AdminReviews';
import { AdminProducts, AdminProductsEdit, AdminProductsCreate, AdminProductsShow } from './AdminProducts';
import authClient from './authClient'; 



const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}
const restClient = jsonServerRestClient('http://localhost:3000/data', httpClient);

const AdminPage = () => (
	<Admin authClient={authClient} title="Thank Heaven Admin"  restClient={restClient}>
		<Resource name="reviews" list={AdminReviews} edit={AdminReviewsEdit} create={AdminReviewsCreate} remove={Delete}/>
		<Resource name="products" show={AdminProductsShow} list={AdminProducts} edit={AdminProductsEdit} create={AdminProductsCreate}  remove={Delete}/>
		<Resource name="brands" list={AdminBrands} edit={AdminBrandsEdit} create={AdminBrandsCreate} remove={Delete}/>


    </Admin>
);
// const restClient = jsonServerRestClient('http://jsonplaceholder.typicode.com');
//
// const AdminPage = () => (
// 	<Admin restClient={restClient}>
// 		<Resource name="posts" list={AdminReviews} />
//
//
//
//     </Admin>
// );
export default AdminPage;

  // <Resource name="Reviews" reviews={AdminReviews} />
  //       <Resource name="Brands" brands={AdminBrands} />

 	//  	<Resource name="Products" products={AdminProducts} />
  //

  // <Admin  restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
  //      <Resource name="posts" list={AdminReviews} />

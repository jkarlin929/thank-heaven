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



const restClient = jsonServerRestClient('/data');

const AdminPage = () => (
	<Admin authClient={authClient} title="Thank Heaven Admin"  restClient={restClient}>
		<Resource name="reviews" list={AdminReviews} edit={AdminReviewsEdit} create={AdminReviewsCreate} remove={Delete}/>
		<Resource name="products" list={AdminProducts} show={AdminProductsShow} edit={AdminProductsEdit} create={AdminProductsCreate}  remove={Delete}/>
		<Resource name="brands" list={AdminBrands} edit={AdminBrandsEdit} create={AdminBrandsCreate} remove={Delete}/>


    </Admin>
);

export default AdminPage;

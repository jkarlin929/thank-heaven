// in src/App.js

import React from 'react';
import { jsonServerRestClient, simpleRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';
// import { fetchJson, flattenObject } from 'admin-on-rest/src/util/fetch';
import { AdminBrands } from './AdminBrands';
import { AdminReviews } from './AdminReviews';
import { AdminProducts } from './AdminProducts';



const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set("Access-Control-Expose-Headers", "content-length");
    console.log(options.headers);
    return fetchUtils.fetchJson(url, options);
}
const restClient = jsonServerRestClient('http://localhost:3000/data');

const AdminPage = () => (
	<Admin restClient={restClient}>
		<Resource name="reviews" list={AdminReviews} />



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

// in src/App.js

import React from 'react';
import { jsonServerRestClient, restClient, simpleRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';
import { AdminBrands } from './AdminBrands';
import { AdminReviews } from './AdminReviews';
import { AdminProducts } from './AdminProducts';



const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });

    }
    options.withCredentials = true;
        return fetchUtils.fetchJson(url, options).then(({status, headers, body, json}) => {
        json = json['results'] ? json['results'] : json;
        return {status, headers, body, json};
    });
  }
//     options.headers['X-Total-Count'] = '30' ;
//     options.headers['Access-Control-Expose-Headers'] = 'X-Total-Count';
//     // add your own headers here
//     options.headers.set("Access-Control-Expose-Headers", "content-range");
//     options.headers['Content-Range'] = 'posts 0-24/319'
//     console.log(options.headers);
//     return fetchUtils.fetchJson(url, options);
// }
const custRestClient = restClient('GET_LIST', 'http://localhost:3000/data', {
    pagination: { page: 1, perPage: 5 },
    sort: { field: 'title', order: 'ASC' },
    filter: { author_id: 12 },
  });


const AdminPage = () => (
	<Admin restClient={restClient}>
		<Resource name="reviews" list={AdminReviews} />



    </Admin>
);

export default AdminPage;

  // <Resource name="Reviews" reviews={AdminReviews} />
  //       <Resource name="Brands" brands={AdminBrands} />

 	//  	<Resource name="Products" products={AdminProducts} />
  //

  // <Admin  restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
  //      <Resource name="posts" list={AdminReviews} />

// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { AdminBrands } from './AdminBrands';
import { AdminReviews } from './AdminReviews'; 
import { AdminProducts } from './AdminProducts'

const Admin = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="Brands" brands={AdminBrands} />
        <Resource name="Reviews" reviews={AdminReviews} />
        <Resource name="Products" products={AdminProducts} />

    </Admin>
);

export default Admin;
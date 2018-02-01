// in src/App.js
import React from 'react';
// import Dropzone from 'react-dropzone'

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

// import { AdminBrands } from './AdminBrands';
import { AdminReviews } from './AdminReviews'; 
// import { AdminProducts } from './AdminProducts'

const AdminPage = () => (
    <Admin restClient={jsonServerRestClient('/data/reviews')}>
       
        <Resource name="Reviews" reviews={AdminReviews} />
    

    </Admin>
);

export default AdminPage;

 // <Resource name="Brands" brands={AdminBrands} />
 // <Resource name="Products" products={AdminProducts} />
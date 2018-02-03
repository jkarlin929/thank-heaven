// in src/AdminProducts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const AdminReviews = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField source="id" />

            <TextField source="quote" />
            <TextField source="name" />
            <TextField source="location" />
            <EditButton />
        </Datagrid>


    </List>
);



export const AdminReviewsEdit = (props) => (
    <Edit title="Edit Review"  {...props}>
        <SimpleForm>
            <DisabledInput source="id" />

            <TextInput source="name" />

            <TextInput source="location" />
            <LongTextInput source="quote" />
            
        </SimpleForm>
    </Edit>
);

export const AdminReviewsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />

            
            <TextInput source="location" />
            <LongTextInput source="quote" />
            
        </SimpleForm>
    </Create>
);

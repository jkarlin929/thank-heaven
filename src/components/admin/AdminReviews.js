// in src/AdminProducts.js
import React from 'react';
import {
    Filter, 
    Show, 
    SimpleShowLayout, 
    ImageInput, 
    List, 
    Edit, 
    Create, 
    Datagrid, 
    ReferenceField, 
    TextField, 
    EditButton, 
    DisabledInput, 
    LongTextInput, 
    ReferenceInput, 
    SelectInput, 
    SimpleForm, 
    TextInput, 
    ImageField, 
    BooleanField, 
    BooleanInput, 
    ShowButton, 
    Responsive, 
    SimpleList
    } from 'admin-on-rest';

export const AdminReviews = (props) => (

    <List {...props}>
    <Responsive
                small={
                    <SimpleList
                        primaryText={record => record.name}
                        secondaryText={record => record.location}
                        
                    />
                }
                medium={
                    <Datagrid>
                        <TextField source="id" />

                        <TextField source="quote" />
                        <TextField source="name" />
                        <TextField source="location" />
                        <EditButton />
                    </Datagrid>
                }
                />

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

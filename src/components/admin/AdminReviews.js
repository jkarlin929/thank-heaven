// in src/AdminProducts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


console.log("Inside Admin Reviews")
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

// export const AdminReviews = (props) => (

//     <List {...props}>
//     {console.log("this is props", props)}
//         <Datagrid>

//             <TextField source="id" />
//             <TextField source="quote" />
//             <TextField source="name" />
//             <TextField source="location" />

// 			</Datagrid>
//     </List>
// );


const AdminReviewsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AdminReviewsEdit = (props) => (
    <Edit title={<AdminReviewsTitle />} {...props}>
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

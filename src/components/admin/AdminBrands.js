

// in src/AdminBrands.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ImageField, BooleanField} from 'admin-on-rest';

export const AdminBrands = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="location" />
            <TextField source="story" />
            <TextField source="quote" />
            <ImageField source="image" title="title" />
			<BooleanField source="featured" />        
			</Datagrid>
    </List>
);
export default AdminBrands;


const AdminBrandsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AdminBrandsEdit = (props) => (
    <Edit title={<AdminBrandsTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="location" />
            <LongTextInput source="story" />
            <LongTextInput source="quote" />
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drag & Drop or Click to Upload/</p>} >
    			<ImageField source="src" title="title" />
			</ImageInput>
			<BooleanInput label="Featured" source="featured" />
        </SimpleForm>
    </Edit>
);

export const AdminBrandsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" validate={required}/>
            <TextInput source="location" validate={required}/>
            <LongTextInput source="story" validate={required}/>
            <LongTextInput source="quote" validate={required}/>
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drag & Drop or Click to Upload</p>}>
    			<ImageField source="src" title="title" />
			</ImageInput>
			<BooleanInput label="Featured" source="featured" />
        </SimpleForm>
    </Create>
);


// in src/AdminProducts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const AdminProducts = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField label="Brand" source="brand_id" reference="brands">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="brand_id" />
            <TextField source="description" />
            <ImageField source="image" title="title" />
			<BooleanField source="featured" />        
			</Datagrid>
    </List>
);



const AdminProductsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AdminBrandsEdit = (props) => (
    <Edit title={<AdminProductsTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="location" />
            <ReferenceInput label="Brand" source="brand_id" reference="brands" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="description" />
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drag & Drop or Click to Upload/</p>} >
    			<ImageField source="image" title="title" />
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
            <ReferenceInput label="Brand" source="brand_id" reference="brands" allowEmpty>
                <SelectInput optionText="name" validate={required}/>
            </ReferenceInput>
            <LongTextInput source="description" validate={required}/>
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drag & Drop or Click to Upload/</p>} >
    			<ImageField source="image" title="title" />
			</ImageInput>
			<BooleanInput label="Featured" source="featured" />
            
        </SimpleForm>
    </Create>
);

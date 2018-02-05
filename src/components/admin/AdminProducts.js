
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

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Name" source="name"  />
        <TextInput label="Brand" source="brand"  />
        <TextInput label="Featured" source="featured"  defaultValue="true" />
    </Filter>
);

export const AdminProducts = (props) => (
    <List {...props} filters={<PostFilter />} >
        <Responsive
                small={
                    <SimpleList
                        primaryText={record => record.name}
                        secondaryText={record => record.featured}
                        
                    />
                }
                medium={
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" sortable={true}/>
                        <ReferenceField label="Brand" source="brand_id" reference="brands">
                            <TextField source="name" />
                        </ReferenceField>
                        
                        <TextField source="description" />
                        <ImageField source="image" title="title" />
            			<BooleanField source="featured" /> 
            			<EditButton />       
            		</Datagrid>
                }
                />
            </List>
);




export const AdminProductsEdit = (props) => (
    <Edit title="Edit Product" {...props}>
        <SimpleForm>
            
            
            <TextInput source="name" />
          
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

export const AdminProductsCreate = (props) => (

    <Create {...props}>
        <SimpleForm>
        	
            
            <TextInput source="name" />
            
            <ReferenceInput label="Brand" source="brand_id" reference="brands" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="description" />
            <ImageInput source="image" label="Related pictures" accept="image/*" placeholder={<p>Drag & Drop or Click to Upload/</p>} >
    			<ImageField source="image" title="title" />
			</ImageInput>
			<BooleanInput label="Featured" source="featured" />
            
        </SimpleForm>
    </Create>
);

export const AdminProductsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField label="Brand" source="brand_id" reference="brands">
                <TextField source="name" />
            </ReferenceField>
            
            <TextField source="description" />
            <ImageField source="image" title="title" />
			<BooleanField source="featured" /> 
			<EditButton />    
        </SimpleShowLayout>
    </Show>
);

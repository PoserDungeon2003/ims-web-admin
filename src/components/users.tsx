import { BooleanField, BooleanInput, Create, Datagrid, Edit, EmailField, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleList, SimpleShowLayout, TextField, TextInput, UrlField } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from './MyUrlField';

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.fullName}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <EmailField source="email" />
          <NumberField source="phone" />
          <TextField source="fullName" />
          <TextField source="username" />
          <BooleanField source="emailVerified" />
          <TextField source="realm" />
          <TextField source="verificationToken" />
          <ReferenceField source="rolesId" reference="roles">
            <TextField source="name" />
          </ReferenceField>
        </Datagrid>
      )}
    </List>
  );
};

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <TextField source="fullName" />
      <TextField source="username" />
      <BooleanField source="emailVerified" />
      <TextField source="realm" />
      <TextField source="verificationToken" />
      <ReferenceField source="rolesId" reference="roles">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="realm" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="emailVerified" />
      <TextInput source="verificationToken" />
      <NumberInput source="phone" />
      <TextInput source="fullName" />
      <TextInput source="password" />
      <ReferenceInput source="rolesId" reference="roles">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => {
  return (
    <Create redirect={"list"}>
      <SimpleForm>
        <TextInput source="realm" />
        <TextInput source="username" />
        <TextInput source="email" />
        <BooleanInput source="emailVerified" defaultValue={false}/>
        <TextInput source="verificationToken" />
        <NumberInput source="phone" />
        <TextInput source="fullName" />
        <TextInput source="password" />
        <ReferenceInput source="rolesId" reference="roles">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
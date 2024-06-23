import { Datagrid, Edit, EmailField, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const InternList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <TextField source="University" />
      <TextField source="major" />
      <TextField source="experiences" />
      <ReferenceField source="usersId" reference="users">
        <TextField source="fullName" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const InternShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <TextField source="University" />
      <TextField source="major" />
      <TextField source="experiences" />
      <ReferenceField source="usersId" reference="users">
        <TextField source="fullName" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
export const InternEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="fullName" />
      <TextInput source="email" />
      <NumberInput source="phone" />
      <TextInput source="University" />
      <TextInput source="major" />
      <TextInput source="experiences" />
      <ReferenceInput source="usersId" reference="users" >
        <SelectInput optionText="fullName" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
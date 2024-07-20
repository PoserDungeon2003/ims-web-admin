import { Create, Datagrid, Edit, List, ReferenceField, ReferenceInput, required, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const JobPositionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status" />
      <TextField source="description" />
      <ReferenceField source="usersId" reference="users" label="HR Manager">
        <TextField source="fullName" label="HR Manager" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const JobPositionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      {/* <TextInput source="status" /> */}
      <SelectInput source="status" choices={[
        { id: 'open', name: 'Open' },
        { id: 'closed', name: 'Closed' },
      ]}>
      </SelectInput>
      <TextInput source="description" />
      <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 1 }} label="HR Manager">
        <SelectInput optionText="fullName" label="HR Manager" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const JobPositionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status" />
      <TextField source="description" />
      <ReferenceField source="usersId" reference="users" label="HR Manager">
        <TextField source="fullName" label="HR Manager" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const JobPositionCreate = () => {
  return (
    <Create redirect={"list"}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]}/>
        <SelectInput source="status" choices={[
          { id: 'open', name: 'Open' },
          { id: 'closed', name: 'Closed' },
        ]}>
        </SelectInput>
        <TextInput source="description" validate={[required()]}/>
        <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 1 }} label="HR Manager">
          <SelectInput optionText="fullName" label="HR Manager" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}

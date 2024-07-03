import { Create, Datagrid, Edit, EmailField, FunctionField, List, NumberField, NumberInput, ReferenceField, ReferenceInput, RichTextField, SearchInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, useNotify, useRedirect } from 'react-admin';

const internFilter = [
  <SearchInput source="fullName" alwaysOn />,
  <SearchInput source="email" />,
  <SearchInput source="phone" />,
  <ReferenceInput source="usersId" reference="users" label='Mentor' filter={{rolesId: 3}}>
    <SelectInput optionText="fullName" />
  </ReferenceInput>
]

export const InternList = () => (
  <List filters={internFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <FunctionField
        source="phone"
        render={record => `${record.phone}`.replace(/,/g, '')}
      />
      <TextField source="University" />
      <TextField source="major" />
      <TextField source="experiences" />
      <ReferenceField source="usersId" reference="users" label="Mentor">
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

export const InternCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create mutationOptions={{
      onError(error, variables, context) {
        notify(`Could not create intern`);
      },
      onSuccess(data, variables, context) {
        notify(`Add new intern successfully`);
        redirect('/intern');
      },
    }}>
      <SimpleForm>
        <TextInput source="fullName" />
        <TextInput type='email' source="email" />
        <NumberInput type='tel' source="phone" />
        <TextInput source="University" />
        <TextInput source="major" />
        <TextInput source="experiences" />
        <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 3 }} label="Mentor">
          <SelectInput optionText="fullName" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}
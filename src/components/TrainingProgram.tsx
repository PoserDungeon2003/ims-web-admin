import { RichTextInput } from "ra-input-rich-text";
import { List, Datagrid, DateField, TextField, ReferenceField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create, SelectInput, useNotify, useRedirect, FunctionField, RichTextField } from "react-admin";

export const TrainingProgramList = () => (
  <List>
    <Datagrid rowClick="show">
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="name" />
      <FunctionField
        source="content"
        render={record => (
          <div style={{ maxWidth: '250px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {record ? record.content : ''}
          </div>
        )}
      />
      <TextField source="code" />
      <ReferenceField source="usersId" reference="users" label="Created By">
        <TextField source="fullName" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const TrainingProgramShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="id" />
        <TextField source="name" />
        <RichTextField source="content" />
        <TextField source="code" />
        <ReferenceField source="usersId" reference="users" label="Created By">
          <TextField source="fullName" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  )
}

export const TrainingProgramEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <DateInput source="createdAt" />
        <DateInput source="updatedAt" />
        <TextInput source="id" />
        <TextInput source="name" />
        <RichTextInput source="content" />
        <TextInput source="code" />
        <TextInput source="createdBy" />
        <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 2 }}>
          <SelectInput optionText="fullName" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}

export const TrainingProgramCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create mutationOptions={{
      onError(error, variables, context) {
        notify(`Could not create intern`);
      },
      onSuccess(data, variables, context) {
        notify(`Add new training program successfully`);
        redirect('/training-programs');
      },
    }}>
      <SimpleForm>
        <TextInput source="name" />
        <RichTextInput source="content" />
        <TextInput source="code" />
        <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 2 }}>
          <SelectInput optionText="fullName" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
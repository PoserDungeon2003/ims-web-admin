import { RichTextInput } from 'ra-input-rich-text';
import { Button, Create, Datagrid, Edit, FunctionField, List, ReferenceField, ReferenceInput, RichTextField, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, useNotify, useRedirect } from 'react-admin';

export const TaskList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="description" /> */}
        <FunctionField
          source="description"
          render={record => {
            return (
              <div style={{ maxWidth: '250px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                {record ? record.description : 'text'}
              </div>
            )
          }}
        />
        <ReferenceField source="usersId" reference="users" label="Created by">
          <TextField source="fullName" />
        </ReferenceField>
        <ReferenceField source="trainingProgramId" label='Training program code' reference="training-programs">
          <TextField source="code" />
        </ReferenceField>
      </Datagrid>
    </List>
  )
}

export const TaskEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <RichTextInput source="description" />
      <TextInput source="name" />
      <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 3 }}>
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <ReferenceInput source="trainingProgramId" reference="training-programs">
        <SelectInput optionText="code" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const TaskShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <RichTextField source="description" />
      <TextField source="name" />
      <ReferenceField source="usersId" reference="users" label="Created by">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="trainingProgramId" label='Training program code' reference="training-programs">
        <TextField source="code" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const TaskCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create mutationOptions={{
      onError(error, variables, context) {
        notify(`Could not create intern`);
      },
      onSuccess(data, variables, context) {
        notify(`Add new task successfully`);
        redirect('/tasks');
      },
    }}
    >
      <SimpleForm>
        <TextInput source="name" />
        <RichTextInput source="description" />
        <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 3 }}>
          <SelectInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="trainingProgramId" reference="training-programs">
          <SelectInput optionText="code" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
};
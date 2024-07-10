import { BooleanField, BooleanInput, Create, Datagrid, Edit, List, ReferenceField, ReferenceInput, required, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const TasksManagementList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <BooleanField source="isCompleted" />
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="tasksId" reference="tasks">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const TasksManagementEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <BooleanInput source="isCompleted" />
      <ReferenceInput source="internId" reference="intern">
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <ReferenceInput source="tasksId" reference="tasks">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const TasksManagementShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <BooleanField source="isCompleted" />
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="tasksId" reference="tasks">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const TasksManagementCreate = () => {
  return (
    <Create redirect={"list"}>
      <SimpleForm>
        <BooleanInput source="isCompleted" validate={[required()]} />
        <ReferenceInput source="internId" reference="intern">
          <SelectInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="tasksId" reference="tasks">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
import { Datagrid, DateField, DateInput, Edit, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const FeedBackList = () => (
  <List>
    <Datagrid rowClick="edit">
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="feedbackText" />
      <NumberField source="rating" />
      <ReferenceField source="usersId" reference="users" label="Mentor">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="trainingProgramId" label='Training program code' reference="training-programs">
        <TextField source="code" />
      </ReferenceField>
    </Datagrid>
  </List>
);


export const FeedbackShow = () => (
  <Show>
    <SimpleShowLayout>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="feedbackText" />
      <NumberField source="rating" />
      <ReferenceField source="usersId" reference="users" label="Mentor">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="trainingProgramId" label='Training program code' reference="training-programs">
        <TextField source="code" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const FeedbackEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="id" />
      <TextInput source="feedbackText" />
      <NumberInput source="rating" />
      <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 3 }} label="Mentor">
        <SelectInput optionText="fullName" label="Mentor" />
      </ReferenceInput>
      <ReferenceInput source="internId" reference="intern">
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <ReferenceInput source="trainingProgramId" reference="training-programs">
        <SelectInput optionText="code" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
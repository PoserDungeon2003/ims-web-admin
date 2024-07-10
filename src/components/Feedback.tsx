import { Datagrid, DateField, List, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

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
      </ReferenceField>    </SimpleShowLayout>
  </Show>
);
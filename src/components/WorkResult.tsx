import { List, Datagrid, TextField, NumberField, ReferenceField, Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, Show, SimpleShowLayout, Create, SelectInput, required, maxValue } from "react-admin";

export const WorkResultList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="percentage" />
      <TextField source="note" />
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="trainingProgramId" reference="training-programs">
        <TextField source="code" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const WorkResultEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="percentage" />
      <TextInput source="note" />
      <ReferenceInput source="internId" reference="intern">
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <ReferenceInput source="trainingProgramId" reference="training-programs">
        <SelectInput optionText="code" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const WorkResultShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <NumberField source="percentage" validate={[required(), maxValue(100)]}/>
      <TextField source="note" validate={[required()]}/>
      <ReferenceField source="internId" reference="intern">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="trainingProgramId" reference="training-programs">
        <TextField source="code" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const WorkResultCreate = () => {
  return (
    <Create redirect={"show"}>
      <SimpleForm>
        <NumberInput source="percentage" validate={[required(), maxValue(100)]} />
        <TextInput source="note" validate={[required()]}/>
        <ReferenceInput source="internId" reference="intern">
          <SelectInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="trainingProgramId" reference="training-programs">
          <SelectInput optionText="code" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
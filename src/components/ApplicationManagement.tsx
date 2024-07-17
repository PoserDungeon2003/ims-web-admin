import { Datagrid, DateField, DateInput, Edit, EmailField, FunctionField, List, NumberField, NumberInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, UrlField } from "react-admin";

export const ApplicationList = () => (
  <List>
    <Datagrid rowClick="show">
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <FunctionField
        source="resume"
        render={record => (
          <a href={record.resume} target="_blank" style={{ maxWidth: '250px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {record ? "Open" : ''}
          </a>
        )}
      />
      {/* <UrlField source="resume" title="Resume" /> */}
      <TextField source="appliedTo" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const ApplicationEdit = () => (
  <Edit>
      <SimpleForm>
          <DateInput source="createdAt" />
          <DateInput source="updatedAt" />
          <TextInput source="id" />
          <TextInput source="fullName" />
          <TextInput source="email" />
          <NumberInput source="phone" />
          <TextInput source="resume" />
          <TextInput source="coverLetter" />
          <TextInput source="appliedTo" />
          <TextInput source="status" />
      </SimpleForm>
  </Edit>
);

export const ApplicationShow = () => (
  <Show>
      <SimpleShowLayout>
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <TextField source="id" />
          <TextField source="fullName" />
          <EmailField source="email" />
          <NumberField source="phone" />
          <UrlField source="resume" />
          <TextField source="coverLetter" />
          <TextField source="appliedTo" />
          <TextField source="status" />
      </SimpleShowLayout>
  </Show>
);
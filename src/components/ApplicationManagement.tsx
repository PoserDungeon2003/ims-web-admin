import { Datagrid, DateField, DateInput, Edit, EmailField, FunctionField, List, NumberField, NumberInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, UrlField } from "react-admin";

export const ApplicationList = () => (
  <List>
    <Datagrid rowClick="show">
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <FunctionField
        source="phone"
        render={(record: any) => `${record.phone}`.replace(/,/g, '')}
      />
      <FunctionField
        source="resume"
        render={(record: any) => (
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
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'accepted', name: 'Accepted' },
        { id: 'rejected', name: 'Rejected' },
      ]}>
      </SelectInput>
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
      <FunctionField
        source="phone"
        render={(record: any) => `${record.phone}`.replace(/,/g, '')}
      />
      <UrlField source="resume" />
      <UrlField source="coverLetter" />
      <TextField source="appliedTo" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
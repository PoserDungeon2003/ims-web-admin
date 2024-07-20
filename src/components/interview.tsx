import { Create, Datagrid, DateField, DateInput, DateTimeInput, Edit, FunctionField, List, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const InterviewList = () => (
  <List>
    <Datagrid rowClick="edit">
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="intervieweeName" />
      <DateField source="time" />
      <TextField source="location" />
      <FunctionField source="quiz" style={{maxWidth: '150px', overflow: 'hidden', whiteSpace: 'collapse', textOverflow: 'ellipsis'}}
       render={(record: any) => `${JSON.stringify(record.quiz)}`} />
      {/* <TextField source="quiz" /> */}
      <TextField source="status" />
      <ReferenceField source="usersId" reference="users" label="HR Manager">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="applicationId" reference="applications" />
    </Datagrid>
  </List>
);

export const InterviewEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="id" />
      <TextInput source="intervieweeName" />
      <DateInput source="time" />
      <TextInput source="location" />
      <TextInput source="quiz" />
      <FunctionField source="quiz" style={{maxWidth: '150px', overflow: 'hidden', whiteSpace: 'collapse', textOverflow: 'ellipsis'}} 
        render={(record: any) => `${JSON.stringify(record.quiz)}`}
      />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'accepted', name: 'Accepted' },
        { id: 'rejected', name: 'Rejected' },
      ]}>
      </SelectInput>
      <ReferenceInput source="usersId" reference="users" filter={{ rolesId: 1 }} label="Mentor">
        <SelectInput optionText="fullName" label="HR Manager"/>
      </ReferenceInput>
      <ReferenceInput source="applicationId" reference="applications" />
    </SimpleForm>
  </Edit>
);

export const InterviewShow = () => (
  <Show>
    <SimpleShowLayout>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
      <TextField source="intervieweeName" />
      <DateField source="time" />
      <TextField source="location" />
      <TextField source="quiz" />
      <TextField source="status" />
      <ReferenceField source="usersId" reference="users" label="HR Manager">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="applicationId" reference="applications" />
    </SimpleShowLayout>
  </Show>
);

export const InterviewCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="intervieweeName" />
      <DateTimeInput source="time" />
      <TextInput source="location" />
      <TextInput source="quiz" />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'accepted', name: 'Accepted' },
        { id: 'rejected', name: 'Rejected' },
      ]}>
      </SelectInput>
      <ReferenceInput source="usersId" label="HR Manager" reference="users" filter={{ rolesId: 1 }}>
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <ReferenceInput source="applicationId" reference="applications" filter={{status: 'accepted'}}/>
    </SimpleForm>
  </Create>
);
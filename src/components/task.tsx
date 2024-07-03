import { Datagrid, List, ReferenceField, TextField } from 'react-admin';
export const TaskList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="description" />
        <TextField source="name" />
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
import { List, Datagrid, TextField, NumberField, ReferenceField } from "react-admin";

export const WorkResultList = () => (
  <List>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <NumberField source="percentage" />
          <TextField source="note" />
          <ReferenceField source="internId" reference="intern" />
          <ReferenceField source="trainingProgramId" reference="training-programs" />
      </Datagrid>
  </List>
)
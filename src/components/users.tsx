import { Datagrid, EmailField, List, NumberField, ReferenceField, SimpleList, TextField, UrlField } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from './MyUrlField';

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <EmailField source="email" />
          <NumberField source="phone" />
          <TextField source="fullName" />
          <TextField source="username" />
          <TextField source="password" />
          <ReferenceField source="rolesId" reference="roles" />
        </Datagrid>
      )}
    </List>
  );
};
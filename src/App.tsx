import './App.css'
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin'
import { dataProvider } from './dataProvider'
import { UserList } from './components/users'
import { PostCreate, PostEdit, PostList } from './components/posts'
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './components/dashboard'
import { authProvider } from './authProvider'

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={ListGuesser} icon={UserIcon}/>
    </Admin>
  )
}

export default App

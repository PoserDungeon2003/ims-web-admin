import './App.css'
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin'
import { dataProvider } from './dataProvider'
import { UserList, UserShow } from './components/users'
import { PostCreate, PostEdit, PostList } from './components/posts'
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './components/dashboard'
import { authProvider } from './authProvider'
import { InternCreate, InternEdit, InternList, InternShow } from './components/intern'
import { TaskCreate, TaskEdit, TaskList, TaskShow } from './components/task'
import { WorkResultList } from './components/WorkResult'
import { TrainingProgramCreate, TrainingProgramEdit, TrainingProgramList, TrainingProgramShow } from './components/TrainingProgram'

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} show={UserShow} edit={EditGuesser} icon={UserIcon} />
      <Resource name="intern" list={InternList} show={InternShow} edit={InternEdit} create={InternCreate} icon={UserIcon} />
      <Resource name="roles" list={ListGuesser} show={ShowGuesser} edit={EditGuesser} icon={UserIcon} />
      <Resource name="training-programs" list={TrainingProgramList} show={TrainingProgramShow} edit={TrainingProgramEdit} create={TrainingProgramCreate} icon={UserIcon} />
      <Resource name="tasks" list={TaskList} show={TaskShow} edit={TaskEdit} create={TaskCreate} icon={UserIcon} />
      <Resource name="work-results" list={WorkResultList} show={ShowGuesser} edit={EditGuesser} icon={UserIcon} />
      <Resource name="applications" list={TaskList} show={ShowGuesser} edit={EditGuesser} icon={UserIcon} />

    </Admin>
  )
}

export default App

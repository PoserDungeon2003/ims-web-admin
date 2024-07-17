import './App.css'
import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin'
import { dataProvider } from './dataProvider'
import { UserCreate, UserEdit, UserList, UserShow } from './components/users'
import { PostCreate, PostEdit, PostList } from './components/posts'
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ScoreIcon from '@mui/icons-material/Score';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Dashboard from './dashboard/dashboard'
import { authProvider } from './authProvider'
import { InternCreate, InternEdit, InternList, InternShow } from './components/intern'
import { TaskCreate, TaskEdit, TaskList, TaskShow } from './components/task'
import { WorkResultCreate, WorkResultEdit, WorkResultList, WorkResultShow } from './components/WorkResult'
import { TrainingProgramCreate, TrainingProgramEdit, TrainingProgramList, TrainingProgramShow } from './components/TrainingProgram'
import { Route } from 'react-router-dom'
import Application from './application/application'
import { TasksManagementCreate, TasksManagementEdit, TasksManagementList, TasksManagementShow } from './components/TasksManagement'
import { FeedBackList, FeedbackShow as FeedBackShow } from './components/Feedback'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApplicationEdit, ApplicationList, ApplicationShow } from './components/ApplicationManagement'
import { InterviewCreate, InterviewEdit, InterviewList, InterviewShow } from './components/interview'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Admin authProvider={authProvider} dataProvider={dataProvider}
        dashboard={Dashboard}>
        <Resource
          name="users"
          list={UserList}
          show={UserShow}
          edit={UserEdit}
          create={UserCreate}
          icon={UserIcon}
        />
        <Resource
          name="intern"
          list={InternList}
          show={InternShow}
          edit={InternEdit}
          create={InternCreate}
          icon={SchoolIcon}
        />
        <Resource
          name="roles"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
          icon={WorkIcon}
        />
        <Resource
          name="training-programs"
          list={TrainingProgramList}
          show={TrainingProgramShow}
          edit={TrainingProgramEdit}
          create={TrainingProgramCreate}
          icon={LocalLibraryIcon}
        />
        <Resource
          name="tasks"
          list={TaskList}
          show={TaskShow}
          edit={TaskEdit}
          create={TaskCreate}
          icon={AddTaskIcon}
        />
        <Resource
          name="work-results"
          list={WorkResultList}
          show={WorkResultShow}
          edit={WorkResultEdit}
          create={WorkResultCreate}
          icon={ScoreIcon}
        />
        <Resource
          name="applications"
          list={ApplicationList}
          show={ApplicationShow}
          edit={ApplicationEdit}
          icon={EmailIcon}
        />
        <Resource
          name="tasks-management"
          list={TasksManagementList}
          show={TasksManagementShow}
          edit={TasksManagementEdit}
          create={TasksManagementCreate}
          icon={AssignmentTurnedInIcon}
        />
        <Resource
          name="feedbacks"
          list={FeedBackList}
          show={FeedBackShow}
          edit={EditGuesser}
          icon={FeedbackIcon}
        />
        <Resource
          name="interviews"
          list={InterviewList}
          show={InterviewShow}
          edit={InterviewEdit}
          create={InterviewCreate}
        />
        <CustomRoutes noLayout>
          <Route path='/apply' element={<Application />} />
        </CustomRoutes>
      </Admin>
    </QueryClientProvider >

  )
}

export default App

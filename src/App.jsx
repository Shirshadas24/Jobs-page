import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage,{jobloader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  const addJob=async (newjob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newjob)
    })
    return;
  }
  
  const deleteJob=async (id) => {
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    })
    return;
  }

  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage/>}/>
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
  <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} loader={jobloader}/>
  <Route path='*' element={<NotFoundPage/>}/>
  </Route>));
  return <RouterProvider router={router}/>
}
export default App;
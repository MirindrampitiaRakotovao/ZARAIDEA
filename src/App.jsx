import './App.css';
import Dashboard from './Components/Tabelau de bord/Dashboard';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Login/> </div>
  },

  {
    path: '/login',
    element: <div> <Login/> </div>
  },

  {
    path: '/register',
    element: <div> <Register/> </div>
  },

  {
    path: '/dashboard',
    element: <div> <Dashboard/> </div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
 
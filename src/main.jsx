import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CountryDetails from './components/CountryDetails.jsx';
import Home from './components/Home.jsx';
import App from './App.jsx'
import './index.css';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',element:<App/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path:'/',element:<Home/>
      },
      {
        path:'/:country',element:<CountryDetails/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

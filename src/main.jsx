import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-white'>
    <div className='container mx-auto'>
    <RouterProvider router={router} />
    </div>
    </div>
  </StrictMode>
)

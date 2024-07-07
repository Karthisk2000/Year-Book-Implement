// import React, {useState} from 'react';

// import './App.css';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import LoginAccessCode from './Login/LoginAccessCode';
// import LoginEmailNumber from './Login/LoginEmailNumber';
// import Index from './pages/Index';
// import Layout from './pages/Layout';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Templates from './components/Templates';
// import CreateDesign from './components/CreateDesign';
// import Main from './pages/Main'


// export default function ApplicationRoutes() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<LoginAccessCode />} />
//         <Route path="/email_number_verification" element={<LoginEmailNumber />} />
//         <Route path="/index" element={<Index />} />
//         <Route path="/layout" element={<Layout />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/templates" element={<Templates />} />
//         <Route path='/design/create' element={<CreateDesign />} />
//         <Route path='/design/:id/edit' element={<Main />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
                                                                                                                                                                  



// App.js
import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LoginAccessCode from './Login/LoginAccessCode';
import LoginEmailNumber from './Login/LoginEmailNumber';
import Index from './pages/Index';
import Layout from './pages/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Templates from './components/Templates';
import CreateDesign from './components/CreateDesign';
import Main from './pages/Main'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginAccessCode />
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'templates',
        element: <Templates />
      },
      {
        path: 'projects',
        element: <Projects />
      }
    ]
  },
  {
    path: '/email_number_verification',
    element: <LoginEmailNumber />
  },
  {
    path: '/index',
    element: <Index />
  },

  {
    path: '/design/create',
    element: <CreateDesign />
  },
  {
    path: '/design/:id/edit',
    element: <Main />
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasicKnowledgeScreen } from '../src/Screens/BasicKnowledge/BasicKnowledgeScreen.jsx';
import { ExpressionScreen } from '../src/Screens/ExpressionScreen.jsx';
import { ControlStructure } from '../src/Screens/ControlStructureScreen.jsx';
import { Links } from '../src/Screens/LinkScreen.jsx';
import { DataStructure } from './Screens/DataStructureScreen.jsx';
import { DataBase } from '../src/Screens/DataBaseScreen.jsx';
import { POOScreen } from './Screens/POOScreen.jsx';
import TechInfo from '../src/Screens/TechInfo.jsx'
import WebDevScreen from './Screens/WebDevScreen.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/WebDev',
    element: <WebDevScreen />,
  },
  {
    path: '/Aprendiendo',
    element: <BasicKnowledgeScreen />
  },
  {
    path: '/Expresiones',
    element: <ExpressionScreen />
  },
  {
    path: '/Estructuras-de-control',
    element: <ControlStructure />
  },
  {
    path: '/Estructuras-de-datos',
    element: <DataStructure />
  },
  {
    path: '/Bases-de-datos',
    element: <DataBase />
  },
  {
    path: '/Paradigma-Orientado-Objetos',
    element: <POOScreen />
  },
  {
    path: '/pruebas',
    element: <Links />
  },
  {
    path: '/tecnología',
    element: <TechInfo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

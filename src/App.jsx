import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import { Home, Info, Products } from './pages';
import './App.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: '/products/:category',
      element: <Products/>
    },
    {
      path: "/info/:id",
      element: <Info/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;

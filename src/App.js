import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routers/Router';

function App() {
  
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

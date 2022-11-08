import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routers/Router';

function App() {
  
  return (
  <div className='max-w-screen-2xl mx-auto'>
     <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;

import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routers/Router';
import {Helmet} from "react-helmet";

function App() {
  
  return (
  <div className='max-w-screen-2xl mx-auto'>
     <RouterProvider router={router}>
     
        <Helmet>
          <title>Welcome to  | Doc-Hours-Health</title>
          <meta 
          name='Description' content='Get service from Doc-Health-service'
          />
        </Helmet>
      
     </RouterProvider>
  </div>
  );
}

export default App;


import './App.css';
import Login from './components/login';

import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ticket from './components/tickets';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/tickets' element={<Ticket/>} />
        
      </Routes>
       
      </BrowserRouter>
 
    </div>
  );
}

export default App;

import './App.css';
import AccordionUsage from './Folder/Page';
import Home from './Landing/Home';
import Temp1 from './Templates/Template_1/Temp1';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/' element={<AccordionUsage/>}/> */}
      <Route path='/' element={<Temp1/>}/>
    </Routes>
    </>
  );
}

export default App;

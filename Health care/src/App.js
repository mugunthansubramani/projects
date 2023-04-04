
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import Page8 from './components/page8';
import Page9 from './components/page9';
import Navbar from './components/navbar';
import Nav_bar from './components/nav_bar';
import Smokeff from './components/smokeff';


function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={[<Nav_bar/>,<Page1/>,<Page2/>,<Page3/>,<Page4/>,<Page5/>,<Page6/>,<Page7/>,<Page8/>,<Page9/>]} ></Route>
  <Route path='/page2' element={<Page2/>} ></Route>
  <Route path='/page3' element={<Page3/>} ></Route>
  <Route path='/page4' element={<Page4/>} ></Route>
  <Route path='/page5' element={<Page5/>} ></Route>
  <Route path='/page6' element={<Page6/>} ></Route>
  <Route path='/page7' element={<Page7/>} ></Route>
  <Route path='/page8' element={<Page8/>} ></Route>
  <Route path='/page9' element={<Page9/>} ></Route>
   </Routes>
 </BrowserRouter>
 {/* <Page1/>
 <Page2/>
 <Page3/>
 <Page4/>
 <Page5/>
 <Page6/>
 <Page7/>
 <Page8/>
 <Page9/>  */}
 </>
  );
}
export default App;
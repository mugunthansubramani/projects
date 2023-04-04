import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/page1';
import Footer from './components/footer';
import Page2 from './components/page2';
import Team from './components/team';
import Testimonals from './components/testimonals';
import Galery from './components/galery';
import Nav_bar from './components/nav_bar';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Nav_bar/>,<Page1/>,<Page2/>,<Galery/>,<Team/>,<Testimonals/>,<Footer/>]} />
        <Route path='/galery' element={[<Galery/>,<Footer/>]}/>
        <Route path='/team' element={[<Nav_bar/>,<Team/>,<Footer/>]}/>
        <Route path='/contact' element={[<Nav_bar/>,<Contact/>]}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

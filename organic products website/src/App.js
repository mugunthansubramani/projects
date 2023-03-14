import Page1 from './components/page1';
import Page2 from './components/page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import Nav_bar from './components/nav_bar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route></Route>
      <Route path="/" element={[<Nav_bar/>,<Page1/>,<Page2/>,<Page3/>,<Page4/>,<Page5/>,<Page6/>,<Page7/>]}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

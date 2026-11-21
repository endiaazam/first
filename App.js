import logo from './logo.svg';
import './App.css';
import Header from './header';
import MainPage from './main';
import Footer from './footer'
import './index.css';
import { useState } from 'react';


function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className='flex'>
      <Header setActivePage={setActivePage} />
      <MainPage activePage={activePage} />
      {/* <Footer /> */}
    </div>
  )
}

export default App;

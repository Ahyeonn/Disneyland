import './App.css';
import { Outlet } from 'react-router-dom'
import Title from './Title';
import HomeSection1 from './Home_section1';

function App() {
  return (
    <div className="App">
      <Title />
      <HomeSection1 />
      <Outlet />
    </div>
  );
}

export default App;

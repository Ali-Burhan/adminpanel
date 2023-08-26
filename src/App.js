import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar/sidebar';
import Maindash from './component/maindash/maindash';
import Rightside from './component/rightside/rightside';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <Sidebar/>
      <Maindash/>
      <Rightside/>
      </div>
    </div>
    
  );
}

export default App;

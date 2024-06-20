import logo from './logo.svg';
import './App.css';
import Tempapp from './Tempapp';

function App() {
  return (
   <div className='parent'>
    <div>
    <h1>Weather Application</h1>
    </div>
    
    <div className='parent-temp'>
    <Tempapp />
    </div>

   </div>
  );
}

export default App;

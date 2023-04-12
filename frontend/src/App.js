import logo from './logo.svg';
import './App.css';
import Note from './Components/Note';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Note/>
    </div>
  );
}

export default App;

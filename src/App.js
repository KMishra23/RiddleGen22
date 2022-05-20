import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Infobar from './components/Infobar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlashCard from './components/FlashCard';
import FCBox from './components/FCBox';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Header />
      <Infobar />
      <FCBox />
      {/* <FlashCard /> */}
    </div>
  );
}

export default App;

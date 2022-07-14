import './App.css';
import EuseEffect from './components/EuseEffect';
import EuseReducer from './components/EuseReducer';
import EuseState from './components/EuseState';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        {/* <EuseState/> */}
        {/* <EuseReducer/> */}
        <EuseEffect />
      </header>
    </div>
  );
}

export default App;

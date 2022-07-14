import './App.css';
import EuseEffect from './components/EuseEffect';
import EuseReducer from './components/EuseReducer';
import EuseState from './components/EuseState';
import EuseRef from './components/EuseRef';
import EuseLayoutEffect from './components/EuseLayoutEffect'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        {/* <EuseState/> */}
        {/* <EuseReducer/> */}
        {/* <EuseEffect /> */}
        {/* <EuseRef/> */}
        <EuseLayoutEffect/>
      </header>
    </div>
  );
}

export default App;

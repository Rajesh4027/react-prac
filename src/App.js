import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Vicky" heroname="Batman">
        <p>This is Child props</p>
      </Greet>
      <Greet name="Vinoth" heroname="Superman">
        <button>Submit</button>
      </Greet>
      <Greet name="Vetri" heroname="Spiderman">
      <select name="" id="">
        <option value="">Select</option>
        <option value="">India</option>
        <option value="">China</option>
      </select>
      </Greet>
      <Welcome name="Vicky" heroname="Batman"/>
      <Welcome name="Vinoth" heroname="Superman"/>
      <Welcome name="Vetri" heroname="Spiderman"/>
      {/* <Hello  /> */}
  

    </div>
  );
}

export default App;

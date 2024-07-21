import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
   <div className="App">
      {/* <Greet name="Vicky" heroname="Batman">
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
      <Welcome name="Vetri" heroname="Spiderman"/> */}

      {/* <Message name="batman"/>   */}
      
     {/* { <Hello  /> } */}

     {/* <Message /> */}

     {/* <Counter /> */}

     {/* <FunctionClick />
     <ClassClick /> */}

     <EventBind />
  

    </div> 

    

    

  );
}

export default App;

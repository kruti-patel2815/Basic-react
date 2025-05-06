import logo from './logo.svg';
import './App.css';
import Second from './Second';
import Third from './Third';
import PropsExample from './PropsExample';

function App() {
  return (
    <>
     <Second>

    </Second>
    <Third>
      
    </Third>
    <PropsExample demo="hello"></PropsExample> 
    <PropsExample demo="hello"></PropsExample> 
     <PropsExample demo={{name : "demo" , age : 12}}></PropsExample> 
    <PropsExample demo={[{name : "demo" , age : 12} , {name : "demo12" , age : 1212}]}></PropsExample>
    </>
  );
}

export default App;

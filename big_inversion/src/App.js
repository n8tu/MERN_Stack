import logo from './logo.svg';
import './App.css';
import PersonCard from "./Card";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Faisal"} lastName={"Aldhafeeri"} age={23} color={"None"}/>
      <PersonCard firstName={"Abdulrahman"} lastName={"Alnafesh"} age={23} color={"Black"}/>
      <PersonCard firstName={"Ahmed"} lastName={"Omar"} age={55} color={"Red"}/>

    </div>
  );
}

export default App;

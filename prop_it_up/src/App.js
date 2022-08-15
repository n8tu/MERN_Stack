import logo from './logo.svg';
import './App.css';

import Card from "./MyComponents"

function App() {
  return (
    <div className="App">
        <Card firstName={"Faisal"} lastName={"Aldhafeeri"} age={22} color={"Blue"}/>
        <Card firstName={"Ahmed"} lastName={"Nasser"} age={25} color={"Yellow"}/>
        <Card firstName={"Abdulrahman"} lastName={"Sultan"} age={22} color={"Black"}/>
        <Card firstName={"Saud"} lastName={"Fadel"} age={22} color={"Red"}/>
    </div>
  );
}

export default App;

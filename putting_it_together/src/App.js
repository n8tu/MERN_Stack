import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return(
      <div className="container">
          <Card firstName={"Faisal"} lastName={"Aldhafeeri"} age={23} color={"Red"}/>
          <Card firstName={"Ahmed"} lastName={"Nasser"} age={18} color={"Black"}/>
          <Card firstName={"Mohammed"} lastName={"Sultan"} age={27} color={"Red"}/>
          <Card firstName={"Fahad"} lastName={"Osama"} age={25} color={"Yellow"}/>
      </div>
  );
}

export default App;

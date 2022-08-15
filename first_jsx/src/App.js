import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className={"container mt-5"}>
      <h1 className={"display-2"}>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <hr/>
        <ul className={"fw-bold"}>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
        </ul>
    </section>
  );
}

export default App;

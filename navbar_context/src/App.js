import logo from './logo.svg';
import './App.css';
import Wrapper from "./contexts/Wrapper";
import Navbar from "./components/Navbar";
import {useState} from "react";
import FormWrapper from "./contexts/FormWrapper";
import Form from "./components/Form";

function App() {
    const [userName,setUserName] = useState("Anonymous")

  return (
    <div className="App">
      <Wrapper.Provider value={userName}>
        <Navbar/>
        <FormWrapper.Provider value={{userName,setUserName}}>
            <Form/>
        </FormWrapper.Provider>
      </Wrapper.Provider>
    </div>
  );
}

export default App;

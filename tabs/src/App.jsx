import './App.css';
import Tab from "./components/Tab";
import DisplayContent from "./components/DisplayContent";
import {useState} from "react";

function App() {

    // set the content to display it in "DisplayContent"
    const [content,setContent] = useState("");

    // Receive the content from the tab via "mail" props and set it as the main content
    const show = (content) => {
        setContent(content)
    }
  return (

    <div className="App">
      <Tab name={"FirstTab"} mail={show}>
          <div className="container">
              <h1>This is my content</h1>
              <p>You can implement what ever you want</p>
          </div>
      </Tab>

      <Tab name={"SecondTab"} mail={show}>
          <div className="container">
              <p>You can add form here as well</p>
              <form>
                  <label htmlFor="name">Name</label>
                  <input type="text" className={"form-control border-2 border-dark"}/>
                  <button className="btn btn-dark my-2">Submit</button>
              </form>
          </div>
      </Tab>

      <Tab name={"ThirdTab"} mail={show}/>

      <DisplayContent display={content}/>
    </div>
  );
}

export default App;

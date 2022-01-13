import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";

function App() {
   return (
      <div className="App">
         <SideBar />
         <Feed />
         <Widget />
      </div>
   );
}

export default App;

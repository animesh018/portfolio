import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Homepage from "./component/Homepage/Homepage";
import TechStack from "./component/TechStack/TechStack";
import Experience from "./component/Experience/Experience";


// Portfolio Website

// 1. Navbar
// 2. HomePage
// 3. Tech Stack
// 4. Experience
// 5. Projects

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Homepage />
        <TechStack />
        <Experience />
        
        </div>
    </div>
  );
}

export default App;

import "./App.css";
import DaisyNav from "./component/daisyNav/DaisyNav";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <h1 className=" text-7xl font-bold text-center">Vite + React</h1>
    </>
  );
}

export default App;

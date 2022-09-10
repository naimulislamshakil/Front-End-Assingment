import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;

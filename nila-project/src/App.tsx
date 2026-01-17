import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./app.css";

// Main App Component
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;


// import { Routes, Route, Navigate, Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home"


// import "./app.css";


// export default function App() {
//   return (
//     <>
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />

//       </Routes>
//     </Router> 
//     </> 
//   );
// }

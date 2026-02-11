import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookingSession from './pages/BookingSession'
import Verifivation from './pages/booking/Verification'
import PaymentPage from "./pages/Payment";

import "./app.css";
import UserDashboard from "./pages/UserDashboard";

// Main App Component
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking/" element={<BookingSession />} />
        <Route path="/booking/:id" element={<BookingSession />} />
        <Route path="/book/:id" element={<Verifivation />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/:id" element={<PaymentPage />} />

        <Route path="dashboard/" element={<UserDashboard />} />
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


import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Page/Home';
import Sign_in from './Page/Sign_in';
import Sign_up from './Page/Sign_up';
import CheckOut from './Page/CheckOut';
import Navbar from './component/Navbar';
import Footer from './component/footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>

      <Route  path="/SignIn" element={<Sign_in />}  />
      <Route  path="/SignUp" element={<Sign_up />}  />

      <Route  path="/" element={<Home />}  />
      <Route  path="/CheckOut" element={<CheckOut />}  />

      </Routes>
    
      </BrowserRouter>

      <Footer />
      
    </>
  );
}

export default App;

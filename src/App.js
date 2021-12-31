import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SharedDash from './Components/Shared/SharedDash';
import Home from './Components/Home/Home';
import Rider from './Components/Rider/Rider';
import Driving from './Components/Driving/Driving';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedDash />} >
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/details/:id" element={<Details />} /> */}
          </Route>
          <Route path="/riderRegister" element={<Rider />} />
          <Route path="/driveRegister" element={<Driving />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

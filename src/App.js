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
import Nopage from './Components/Nopage/Nopage';
import Authprovider from './Components/AuthProvider/Authprovider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RiderShow from './Components/RiderShow/RiderShow';
import NewDrivers from './Components/NewDriver/NewDrivers';
import Welcome from './Components/Welcome/Welcome';
function App() {
  return (
    <Authprovider className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/riderRegister" element={<Rider />} />
          <Route path="/driveRegister" element={<Driving />} />
          <Route path="/dashboard" element={<PrivateRoute><SharedDash /></PrivateRoute>} >
            <Route path="/dashboard" element={<Welcome />} />
            <Route path="/dashboard/admin" element={<Home />} />
            <Route path="/dashboard/riders" element={<RiderShow />} />
            <Route path="/dashboard/newDrivers" element={<NewDrivers />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/details/:id" element={<Details />} /> */}
          </Route>

          <Route path="*" element={<Nopage />} />

        </Routes>

      </BrowserRouter>

    </Authprovider>
  );
}

export default App;

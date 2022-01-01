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
import AdminRoute from './Components/AdminRoute/AdminRoute';
function App() {
  return (

    // setting central state management
    <Authprovider className="App">
      <BrowserRouter>
        <Routes>
          {/* routing */}
          <Route path="/" element={<Login />} />
          <Route path="/riderRegister" element={<Rider />} />
          <Route path="/driveRegister" element={<Driving />} />
          <Route path="/dashboard" element={<PrivateRoute><SharedDash /></PrivateRoute>} >
            <Route path="/dashboard" element={<Welcome />} />
            <Route path="/dashboard/admin" element={<AdminRoute><Home /></AdminRoute>} />
            <Route path="/dashboard/riders" element={<AdminRoute><RiderShow /></AdminRoute>} />
            <Route path="/dashboard/newDrivers" element={<AdminRoute><NewDrivers /></AdminRoute>} />
            {/* <Route path="/about" element={<About />} />
             */}
          </Route>

          <Route path="*" element={<Nopage />} />

        </Routes>

      </BrowserRouter>

    </Authprovider>
  );
}

export default App;

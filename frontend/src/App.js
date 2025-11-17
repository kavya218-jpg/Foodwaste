
import './App.css';
import './Pages/styles.css'

import Homepage from './Pages/Homepage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import ViewOrphanagent from './Pages/Admin/ViewOrphanagent';
import Viewfood from './Pages/Admin/Viewfood';
import History from './Pages/Admin/History';
import UserProfile from './Pages/User/UserProfile';
import AddFood from './Pages/User/AddFood';
import Distribution from './Pages/User/Distribution';
import ViewResponse from './Pages/User/ViewResponse';
import ViewFeedback from './Pages/User/ViewFeedback';
import ViewProfile3 from './Pages/orpahnagent/ViewProfile3';
import ViewFood3 from './Pages/orpahnagent/ViewFood3';
import ViewTransport2 from './Pages/orpahnagent/ViewTransport2';
import AddTransport from './Pages/Transportation/AddTransport';
import ViewTransport from './Pages/Transportation/ViewTransport';
import ViewFood4 from './Pages/Compacting/ViewFood4';
import ViewTransport3 from './Pages/Compacting/ViewTransport3';
import SendFeedback from './Pages/orpahnagent/SendFeedback';
import Viewfood2 from './Pages/User/Viewfood2';
import Reply from './Pages/orpahnagent/Reply';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/register" element={<Register />}/>

              {/* Admin pages */}
              <Route exact path="/vieworphan" element={<ViewOrphanagent />}/>
              <Route exact path="/viewfood" element={<Viewfood />}/>
              <Route exact path="/history" element={<History />}/>

              {/* user pages */}
              <Route exact path="/viewprofile" element={<UserProfile />}/>
              <Route exact path="/addfood" element={<AddFood />}/>
              <Route exact path="/viewfood2" element={<Viewfood2/>}/>
              <Route exact path="/distribution" element={<Distribution />}/>
              <Route exact path="/viewresponse" element={<ViewResponse/>}/>
              <Route exact path="/viewfeedback" element={<ViewFeedback />}/>
              

              {/* orphan agent pages */}
              <Route exact path="/viewprofile3" element={<ViewProfile3/>}/>
              <Route exat path="/viewfood3"  element={<ViewFood3/>}/>
              <Route exact path="/viewtransport2" element={<ViewTransport2 />}/>
              <Route exat path="/sendfeedback" element={<SendFeedback />}/>
              <Route exat path="/reply/:id" element={<Reply />}/>
              
              {/* tansportation pages */}

              <Route exact path="/addtransport" element={<AddTransport  />}/>
              <Route exact path="/viewtransport" element={<ViewTransport />}/>

              {/* composting pages */}
              <Route exact path="/viewfood4" element={<ViewFood4 />}/>
              <Route exact path="/viewtransport3" element={<ViewTransport3 />}/>


            </Routes>

            </Router>
            <ToastContainer />

    </div>
  );
}

export default App;

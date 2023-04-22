// import logo from './logo.svg';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import ShowEmployeeList from './components/ShowEmployeeList';
import CreateEmployee from './components/CreateEmployee';
import ShowEmployeeDetails from './components/ShowEmployeeDetails';
import UpdateEmployeeInfo from './components/UpdateEmployeeInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>

        <Route exact path='/' element={<Home />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          {/* <Route path='/show-employeelist' element={<ShowEmployeeList />} /> */}
          <Route path='/edit-employee/:id' element={<UpdateEmployeeInfo />} />
          <Route path='/show-employee/:id' element={<ShowEmployeeDetails />} />
          <Route exact path='/show-list'element={<ShowEmployeeList/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
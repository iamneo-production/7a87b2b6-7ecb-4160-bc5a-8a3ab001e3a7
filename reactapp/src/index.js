import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Preregister from './preregistration';
import Home from './homepage';
import StudentRegister from './studentregister';
import reportWebVitals from './reportWebVitals';
import TutorRegister from './tutorregister';
import { Route } from 'react-router-dom';
import About from './about';
import Edit from './edit';
import Dashboard from './dashboard';
import C from './c';
import { Sidebar } from 'react-pro-sidebar';
import Cplus from './c++';
import Algorithms from './algorithms';
import Dsa from './dsa';
import Sql from './sql';
import Python from './python';
import Ccourse from './c-course';
import Ccourse1 from './c-course2';
import Ccourse3 from './c-course3';
import Ccourse4 from './c-course-4';
import Ccourse5 from './c-course5';
import Ccourse6 from './c-course6';
import Payment from './payment';
import Cpluscourse1 from './c++1';
import Cpluscourse2 from './c++2';
import Cpluscourse3 from './c++3';
import Cpluscourse4 from './c++4';
import Cpluscourse5 from './c++5';
import Cpluscourse6 from './c++6';
import Dsacourse1 from './dsa1';
import Dsacourse2 from './dsa2';
import Dsacourse3 from './dsa3';
import Dsacourse4 from './dsa4';
import Dsacourse5 from './dsa5';
import Dsacourse6 from './dsa6';
import Algo1 from './algo1';
import Algo2 from './algo2';
import Algo3 from './algo3';
import Algo4 from './algo4';
import Algo5 from './algo5';
import Algo6 from './algo6';
import Python1 from './python1';
import Python2 from './python2';
import Python3 from './python3';
import Python4 from './python4';
import Python5 from './python5';
import Python6 from './Python6';
import Sql1 from './sql1';
import Sql2 from './sql2';
import Sql3 from './sql3';
import Sql4 from './sql4';
import Sql5 from './sql5';
import Sql6 from './sql6';
import Success from './success';
import userReducer from './redux/user';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <Routes>

    <Route path="/" element={<About />}></Route>
    <Route path="/studentregister" element={ <StudentRegister/>}></Route>
    <Route path="/tutorregister" element={<TutorRegister/>}></Route>
    <Route path="/app" element={<App />}></Route>
    <Route path="/homepage" element={<Home />}></Route>
    <Route path="/preregister" element={ <Preregister/>}></Route>
    <Route path="/edit" element={ <Edit/>}></Route>
    <Route path="/dashboard" element={ <Dashboard/>}></Route>
    <Route path="/c" element={ <C/>}></Route>
    <Route path="/c++" element={ <Cplus/>}></Route>
    <Route path="/dsa" element={ <Dsa/>}></Route>
    <Route path="/algo" element={ <Algorithms/>}></Route>
    <Route path="/python" element={ <Python/>}></Route>
    <Route path="/sql" element={ <Sql/>}></Route>
    <Route path="/c-course" element={ <Ccourse/>}></Route>
    <Route path="/dashboard" element={<Sidebar />}></Route>
    <Route path='/c-course1' element={<Ccourse1/>}></Route>
    <Route path='/c-course3' element={<Ccourse3/>}></Route>
    <Route path='/c-course-4' element={<Ccourse4/>}></Route>
    <Route path='/c-course5' element={<Ccourse5/>}></Route>
    <Route path='/c-course6' element={<Ccourse6/>}></Route>
    <Route path='/c++1' element={<Cpluscourse1/>}></Route>
    <Route path='/c++2' element={<Cpluscourse2/>}></Route>
    <Route path='/c++3' element={<Cpluscourse3/>}></Route>
    <Route path='/c++4' element={<Cpluscourse4/>}></Route>
    <Route path='/c++5' element={<Cpluscourse5/>}></Route>
    <Route path='/c++6' element={<Cpluscourse6/>}></Route>
    <Route path='/dsa1' element={<Dsacourse1/>}></Route>
    <Route path='/dsa2' element={<Dsacourse2/>}></Route>
    <Route path='/dsa3' element={<Dsacourse3/>}></Route>
    <Route path='/dsa4' element={<Dsacourse4/>}></Route>
    <Route path='/dsa5' element={<Dsacourse5/>}></Route>
    <Route path='/dsa6' element={<Dsacourse6/>}></Route>
    <Route path='/algo1' element={<Algo1/>}></Route>
    <Route path='/algo2' element={<Algo2/>}></Route>
    <Route path='/algo3' element={<Algo3/>}></Route>
    <Route path='/algo4' element={<Algo4/>}></Route>
    <Route path='/algo5' element={<Algo5/>}></Route>
    <Route path='/algo6' element={<Algo6/>}></Route>
    <Route path='/python1' element={<Python1/>}></Route>
    <Route path='/python2' element={<Python2/>}></Route>
    <Route path='/python3' element={<Python3/>}></Route>
    <Route path='/python4' element={<Python4/>}></Route>
    <Route path='/python5' element={<Python5/>}></Route>
    <Route path='/python6' element={<Python6/>}></Route>
    <Route path='/sql1' element={<Sql1/>}></Route>
    <Route path='/sql2' element={<Sql2/>}></Route>
    <Route path='/sql3' element={<Sql3/>}></Route>
    <Route path='/sql4' element={<Sql4/>}></Route>
    <Route path='/sql5' element={<Sql5/>}></Route>
    <Route path='/sql6' element={<Sql6/>}></Route>
    
    
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/success' element={<Success/>}></Route> 
    
    {/* <Route path="/sidebar" element={ <Sidebar/>}></Route> */}
      {/* <Route path="/profile" element={ <Profile/>}></Route>
    <Route path="/vclassroom" element={ <Virtualclassroom/>}></Route>  */}
  </Routes> 
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

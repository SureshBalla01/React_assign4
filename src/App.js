import logo from './logo.svg';
import './App.css';
import React from 'react';

import HeaderComponent from './components/HeaderComponent';

import ContentComponent from './components/ContentComponent';
import ProductComponent from './components/ProductComponent';
import ButtonComponent from './components/ButtonComponent';
import Button from 'react-bootstrap/Button';
import SimpleAccordion from './components/materialComponents/SimpleAccordion';
import CounterCompoent from './components/CounterComponent';
import CounterFunctionalComponent from './components/CounterFunctionalComponent';
import SetStateIsAsynchronous from './components/SetStateIsAsynchronous';
import TimerComponent from './components/TimerComponent';
import Employees from './components/Employees';
import TimerComponentWithProps from './components/TimerComponentWithProps';
import EmployeesNew from './es6arrowfunctionalcomponent/EmployeesNew';
import Login from './components/Login';
import LoginClassComponent from './components/LoginClassComponent';
import NewLogin from './components/NewLogin';
import RefWithClassComponent from './components/RefWithClassComponent';
import RefWithFunctionalComponent from './components/RefWithFunctionalComponent';
function App() {
  const employeesArr = [
    {
      id:101,
      name:"John",
      dept:"IT",
      desg:"Manager"
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      desg:"Manager"
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      desg:"ASST Manager"
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      desg:"Developer"
    }
  ];
  const employeesArr1 = [
    {
      id:101,
      name:"John",
      dept:"IT",
      isMarried:false
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      isMarried:false
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      isMarried:false
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      isMarried:false
    }
  ];
  return (
    <div>
      <RefWithFunctionalComponent/>
    </div>
  );

}

export default App;

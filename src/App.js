import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp'



function App() {
  return (
    <div className="container">
    <form className="form">
        <div className="form-group">
            <label for="username">User Name</label>
            <input type="text" className="form-control" id="username" placeholder="User name"/>
          </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;

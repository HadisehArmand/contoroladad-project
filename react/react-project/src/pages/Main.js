import React from 'react';
import { Link } from "react-router-dom";
import getUser from '../refresh';

class Main extends React.Component {
   componentDidMount() {
      getUser()
   }
   render() {
      return (
         <div className="body">
            <div className="container ">
               <div className="row">
                  <h1 className="header">User Managment</h1>
               </div>
               <div className="row">
                  <div className="col-6 d-flex justify-content-evenly">
                     <Link className="disable-link" to="/login">
                        <input className="btn-index header-btn-index" type="button" defaultValue="Login" />
                     </Link>
                  </div>
                  <div className="col-6 d-flex justify-content-evenly">
                     <Link className="disable-link" to="/view">
                        <input className="btn-index header-btn-index" type="button" defaultValue="view" />
                     </Link>
                  </div>
               </div>
               <div className="row">
                  <div className="col-6 d-flex justify-content-evenly">
                     <Link className="disable-link" to="/add">
                        <input className="btn-index header-btn-index" type="button" defaultValue="Add/Edit" />
                     </Link>
                  </div>
                  <div className="col-6 d-flex justify-content-evenly">
                     <Link className="disable-link" to="/log">
                        <input className="btn-index header-btn-index" type="button" defaultValue="Log" id="demo" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Main;

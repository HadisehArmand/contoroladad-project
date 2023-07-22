import React from "react";
import SetAction from "../addLogsys";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: '',
        }
        this.retrievedObjectLG = JSON.parse(localStorage.getItem('users'));
        this.checkuser = this.checkuser.bind(this)

    }
    updateInputValue(evt) {
        const val = evt.target.value;
        const idV = evt.target.id;    
        this.setState({
            [idV]: val
        });
    }
    checkuser() {
        for (let index = 0; index < this.retrievedObjectLG.length; index++) {
            if (this.retrievedObjectLG[index]['email'] === this.state.email && this.retrievedObjectLG[index]['password'] === this.state.password) {
                alert("User Login Success !")
                SetAction("login with id "+this.state.id,"ok")
                window.location.href = "/view"
                break
            }else{
                alert("User Login not success !")
                SetAction("login with id "+this.state.id,"False")
                break
            }
        }
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="row main-login">
                    <div className="row d-flex justify-content-center">
                        <h1 className="text-center">Login</h1>
                        <div className="input-group mb-3  d-flex justify-content-center">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input id="email" type="email" className="form-control" placeholder="email" aria-label="email"
                                aria-describedby="basic-addon1" onChange={evt => this.updateInputValue(evt)}/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">P</span>
                            <input id="password" type="password" className="form-control" placeholder="password" aria-label="password"
                                aria-describedby="basic-addon1" onChange={evt => this.updateInputValue(evt)} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6  d-flex justify-content-evenly">
                            <input className="btn" type="button" value="Login" onClick={this.checkuser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
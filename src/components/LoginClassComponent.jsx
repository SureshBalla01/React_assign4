import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
class LoginClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { fname: '', lname:'', mail:'', password: ''}
    }
    setEmpState = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        alert('Registered successfully');
    }
    render() {
        return(<React.Fragment>
            <div className='header1'><h3>Registration Form</h3></div>
            <div className='content1'>
            <form class="regform">
                <div className="form-group">
                    <input  type="text" className="form-control" value={this.state.fname} id="fname" placeholder="First Name" name="fname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <input  type="text" className="form-control" value={this.state.lname} id="lname" placeholder="Last Name" name="lname" onChange={this.setEmpState} />
                </div>

                <div className="form-group">
                    <input  type="text" className="form-control" value={this.state.mail} id="mail" placeholder="Enter email" name="mail" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Register</button>
               
           </form>
            </div>
        </React.Fragment>)
    }
}
export default LoginClassComponent;
